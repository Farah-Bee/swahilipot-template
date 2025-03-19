"use client";
import { useState } from "react";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import PricingBox from "./PricingBox";  // Make sure you import the PricingBox component.

const Attachment = () => {
  return (
    <section id="attachment" className="relative z-10 py-16 md:py-20 lg:py-28 bg-orange-100">
      <div className="container">
        <SectionTitle
          title="Attachment & Internship Opportunities"
          paragraph="Gain practical experience and develop your skills through our attachment and internship programs."
          center
          width="665px"
        />

        {/* Attachment and Internship Opportunities as PricingBox */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-2">
          {/* Student Attachments */}
          <PricingBox
            packageName="Student Attachments"
            price="0"  // For symbolic price, you can change it to something like "free" or leave it as 0
            duration="3-4 months"
            subtitle="We offer attachment opportunities for students looking to fulfill their academic requirements while gaining practical experience in various fields including technology, arts, communications, and community development."
          >
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Flexible duration (3-4 months)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Hands-on project experience</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Mentorship from professionals</span>
              </li>
            </ul>
            <Link href="/about/work-with-us" className="text-primary font-medium hover:underline">
              Apply for Attachment →
            </Link>
          </PricingBox>

          {/* Professional Internships */}
          <PricingBox
            packageName="Professional Internships"
            price="0"  // For symbolic price, change this to something like "free" or leave as 0
            duration="3-12 months"
            subtitle="Our internship program is designed for recent graduates and young professionals seeking to build their careers in innovation, technology, creative arts, and community development."
          >
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>3-12 month structured programs</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Leadership development opportunities</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Networking with industry professionals</span>
              </li>
            </ul>
            <Link href="/about/work-with-us" className="text-primary font-medium hover:underline">
              Apply for Internship →
            </Link>
          </PricingBox>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
            Both our attachment and internship programs provide valuable experience, skills development, and networking opportunities to help launch your career.
          </p>
          <Link href="/about/work-with-us" className="btn">
            View All Opportunities
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Attachment;

