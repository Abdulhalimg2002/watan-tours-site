"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon, MoreHorizontalIcon } from "lucide-react";

// تحويل أرقام إنجليزي → عربي
function toArabicNumber(num: number) {
  const arabicNumbers = ["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];
  return num.toString().split("").map(d => arabicNumbers[parseInt(d)]).join("");
}

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      dir="rtl" // مهم للعربي
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  );
}

function PaginationContent({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex items-center gap-0.5", className)}
      {...props}
    />
  );
}

function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />;
}

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  React.ComponentProps<"a">;

function PaginationLink({ className, isActive, size = "icon", ...props }: PaginationLinkProps) {
  return (
    <Button
      asChild
      variant={isActive ? "outline" : "ghost"}
      size={size}
      className={cn(className)}
    >
      <a
        aria-current={isActive ? "page" : undefined}
        data-slot="pagination-link"
        data-active={isActive}
        {...props}
      />
    </Button>
  );
}

// Previous بالعربي
function PaginationPrevious({
  className,
  text = "السابق",
  ...props
}: React.ComponentProps<typeof PaginationLink> & { text?: string }) {
  return (
    <PaginationLink
      aria-label="الذهاب للصفحة السابقة"
      size="default"
      className={cn("pl-1.5!", className)}
      {...props}
    >
      <ChevronRightIcon data-icon="inline-start" />
      <span className=" sm:block">{text}</span>
    </PaginationLink>
  );
}

// Next بالعربي
function PaginationNext({
  className,
  text = "التالي",
  ...props
}: React.ComponentProps<typeof PaginationLink> & { text?: string }) {
  return (
    <PaginationLink
      aria-label="الذهاب للصفحة التالية"
      size="default"
      className={cn("pr-1.5!", className)}
      {...props}
    >
      <span className=" sm:block">{text}</span>
      <ChevronLeftIcon data-icon="inline-end" />
    </PaginationLink>
  );
}

// Ellipsis
function PaginationEllipsis({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn(
        "flex h-8 w-8 items-center justify-center [&_svg:not([class*='h-'])]:h-4 [&_svg:not([class*='w-'])]:w-4",
        className
      )}
      {...props}
    >
      <MoreHorizontalIcon />
      <span className="sr-only">صفحات إضافية</span>
    </span>
  );
}

// Pagination رقمية بالعربي
function PaginationNumber({ page, isActive, ...props }: { page: number; isActive?: boolean } & React.ComponentProps<"a">) {
  return (
    <PaginationLink isActive={isActive} {...props}>
      {toArabicNumber(page)}
    </PaginationLink>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationNumber,
};