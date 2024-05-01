"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "../ui/card";

export const MotionDiv = motion.div;
export const MotionH2 = motion.h2;
export const MotionP = motion.p;
export const MotionImg = motion(Image);
export const MotionCard = motion(Card);
