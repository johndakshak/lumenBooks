"use client";

import { useState, useEffect, useRef } from "react";
import type { Book } from "@/lib/types";

export function useBookSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Book[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const timeoutId = setTimeout(async () => {
      try {
        const response = await fetch(`/api/books?q=${encodeURIComponent(query)}`);
        const data: Book[] = await response.json();
        setResults(data);
        setIsOpen(true);
      } catch (error) {
        console.error("Search request failed:", error);
        setResults([]);
        setIsOpen(false);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return { query, setQuery, results, isOpen, setIsOpen, containerRef };
}