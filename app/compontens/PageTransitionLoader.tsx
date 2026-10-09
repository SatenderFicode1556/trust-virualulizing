"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import CentralLoader from "./CentralLoader";

export default function PageTransitionLoader() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(true);
  const startedAt = useRef(Date.now());
  const previousPath = useRef(pathname);
  const initialTimer = useRef<number | undefined>(undefined);
  const failsafeTimer = useRef<number | undefined>(undefined);
  const fadeTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    function hideLoader() {
      setIsLoading(false);
      if (fadeTimer.current !== undefined) window.clearTimeout(fadeTimer.current);
      fadeTimer.current = window.setTimeout(() => setIsMounted(false), 220);
    }

    initialTimer.current = window.setTimeout(hideLoader, 1000);

    function beginNavigation() {
      if (initialTimer.current !== undefined) window.clearTimeout(initialTimer.current);
      if (failsafeTimer.current !== undefined) window.clearTimeout(failsafeTimer.current);
      if (fadeTimer.current !== undefined) window.clearTimeout(fadeTimer.current);
      setIsMounted(true);
      startedAt.current = Date.now();
      setIsLoading(true);
      failsafeTimer.current = window.setTimeout(hideLoader, 15000);
    }

    function handleClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (!(event.target instanceof Element)) return;

      const link = event.target.closest("a[href]");
      if (!(link instanceof HTMLAnchorElement) || (link.target && link.target !== "_self") || link.hasAttribute("download")) return;

      const destination = new URL(link.href, window.location.href);
      if (destination.origin !== window.location.origin || destination.pathname === window.location.pathname) return;
      beginNavigation();
    }

    function handlePopState() {
      beginNavigation();
    }

    document.addEventListener("click", handleClick, true);
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("click", handleClick, true);
      window.removeEventListener("popstate", handlePopState);
      if (initialTimer.current !== undefined) window.clearTimeout(initialTimer.current);
      if (failsafeTimer.current !== undefined) window.clearTimeout(failsafeTimer.current);
      if (fadeTimer.current !== undefined) window.clearTimeout(fadeTimer.current);
    };
  }, []);

  useEffect(() => {
    if (previousPath.current === pathname) return;
    previousPath.current = pathname;

    if (failsafeTimer.current !== undefined) window.clearTimeout(failsafeTimer.current);
    const remainingTime = Math.max(0, 500 - (Date.now() - startedAt.current));
    const timer = window.setTimeout(() => {
      setIsLoading(false);
      if (fadeTimer.current !== undefined) window.clearTimeout(fadeTimer.current);
      fadeTimer.current = window.setTimeout(() => setIsMounted(false), 220);
    }, remainingTime);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  if (!isMounted) return null;

  return (
    <div className={`fixed inset-0 z-[200] transition-opacity duration-200 ${isLoading ? "opacity-100" : "pointer-events-none opacity-0"}`}>
      <CentralLoader />
    </div>
  );
}
