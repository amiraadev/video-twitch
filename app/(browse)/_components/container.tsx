/** @format */

"use client";

import React, { useEffect } from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "usehooks-ts";

import { useSidebar } from "@/store/use-sidebar";

interface ContainerProps {
	children: React.ReactNode;
}
export const Container = ({ children }: ContainerProps) => {
	const matches = useMediaQuery("(max-width:1024px)");
	const { collapsed, onCollapse, onExpand } = useSidebar((state) => state);
	useEffect(() => {
		if (matches) {
			onCollapse();
		} else {
			onExpand();
		}
	}, [matches, onCollapse, onExpand]);
	return (
		<div
			className={cn("flex-1", collapsed ? "ml-[70px]" : "ml-[70px] lg:ml-60")}>
			{children}
		</div>
	);
};
