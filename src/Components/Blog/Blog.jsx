import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

import img1 from "../../assets/Rectangle 68.png";
import img2 from "../../assets/Rectangle 69.png";
import img3 from "../../assets/Rectangle 70.png";
import img4 from "../../assets/Rectangle 71.png";
import SectionHeader from "../SectionHeader/SectionHeader";

// img , title , data , date , author , category , description
const posts = [
  {
    img: img1,
    title: "Going all-in with millennial design",
    date: "14 Oct 2022",
    author: "Admin",
    category: "Wood",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
  },
  {
    img: img2,
    title: "Exploring new ways of decorating",
    date: "14 Oct 2022",
    author: "Admin",
    category: "Handmade",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
  },
  {
    img: img3,
    title: "Handmade pieces that took time to make",
    date: "14 Oct 2022",
    author: "Admin",
    category: "Wood",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
  },
];

export default function Blog() {
  return (
    <>
      <section>
        <SectionHeader title="Blog" />

        <div className="my-28 px-8 md:px-0 container flex flex-col md:flex-row gap-y-8 justify-center gap-x-8">
          {/* left side */}
          {/* posts */}
          <div className=" md:w-[817px] flex flex-col gap-y-12">
            {posts.map((post, index) => (
              <article
                className="flex flex-col gap-y-4"
                key={`${post.title}-${index}`}
              >
                <figure className="aspect-auto md:w-full md:h-[500px]">
                  <img
                    src={post.img}
                    alt="laptop img"
                    className="rounded-[10px] h-full w-full"
                  />
                </figure>

                {/* blog details  */}
                <div className="flex gap-x-8 text-[--silver]">
                  {/* author */}
                  <div className="flex gap-x-2 items-center">
                    {/* <DashiconsAdminUsers /> */}
                    <Icon icon="dashicons:admin-users" width="20" height="20" />
                    <p> {post.author} </p>
                  </div>
                  {/* end author */}

                  {/* date */}
                  <div className="flex gap-x-2 items-center">
                    {/* <DashiconsAdminUsers /> */}
                    <Icon icon="uis:calender" width="20" height="20" />
                    <p> {post.date} </p>
                  </div>
                  {/* end date */}

                  {/* category */}
                  <div className="flex gap-x-2 items-center">
                    {/* <DashiconsAdminUsers /> */}
                    <Icon icon="ci:tag" width="20" height="20" />
                    <p> {post.category} </p>
                  </div>
                  {/* end category */}
                </div>

                {/* blog title */}
                <h3 className="text-3xl font-medium my-4">{post.title}</h3>

                {/* blog description */}
                <p className="text-[--silver] text-[15px]">
                  {post.description}
                </p>

                <Link className="relative w-fit  before:absolute before:w-[77px] before:h-[1px]  before:left-1/2 before:-translate-x-1/2 before:-bottom-3 before:bg-black hover:before:w-[100%] before:transition-all">
                  Read more
                </Link>
              </article>
            ))}
          </div>

          {/* right side */}
          <div className="w-full md:w-[393px]">
            {/* top part */}
            {/* search bar and categories */}
            <div className="w-full md:w-[311px] mx-auto">
              {/* search bar */}
              <div className="relative flex items-center">
                <input
                  type="text"
                  className="h-[58px] w-full rounded-[10px] border-[1px] border-[--silver] pl-4 pr-8"
                />
                <div className="absolute right-2">
                  <Icon icon="akar-icons:search" width="19" height="19" />
                </div>
              </div>

              {/* categories */}
              <div className="px-0 md:px-8  mt-6 mb-20">
                <h5 className="font-medium text-2xl">Categories</h5>

                <div className="text-[--silver] mt-5 flex flex-col gap-y-8">
                  <div className="flex justify-between">
                    <p>Crafts</p>
                    <p>2</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Design</p>
                    <p>8</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Handmade</p>
                    <p>7</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Interior</p>
                    <p>1</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Wood</p>
                    <p>6</p>
                  </div>
                </div>
              </div>
            </div>
            {/* end top part  */}

            {/* bottom part */}
            <div className="w-full md:w-[311px] mx-auto px-0  md:px-8">
              <h5 className="font-medium text-2xl">Recent Posts</h5>

              {/* recet posts */}
              <div className="flex flex-col gap-y-5 mt-4">
                <div className="flex gap-x-4 items-center">
                  <figure className="w-[80px] h-[80px] flex-grow-0">
                    <img
                      src={img4}
                      alt=""
                      className="h-[80px] w-[80px] rounded-[10px]"
                    />
                  </figure>
                  <div className="flex flex-col">
                    <p className="text-[14px] w-fit">Modern home in Milan </p>
                    <p className="text-[--silver] text-xs">03 Aug 2022</p>
                  </div>
                </div>
                <div className="flex gap-x-4 items-center">
                  <figure className="w-[80px] h-[80px] flex-grow-0">
                    <img
                      src={img4}
                      alt=""
                      className="h-[80px] w-[80px] rounded-[10px]"
                    />
                  </figure>
                  <div className="flex flex-col">
                    <p className="text-[14px]">Modern home in Milan</p>
                    <p className="text-[--silver] text-xs">03 Aug 2022</p>
                  </div>
                </div>
                <div className="flex gap-x-4 items-center">
                  <figure className="w-[80px] h-[80px] flex-grow-0">
                    <img
                      src={img4}
                      alt=""
                      className="h-[80px] w-[80px] rounded-[10px]"
                    />
                  </figure>
                  <div className="flex flex-col">
                    <p className="text-[14px]">Modern home in Milan</p>
                    <p className="text-[--silver] text-xs">03 Aug 2022</p>
                  </div>
                </div>
                <div className="flex gap-x-4 items-center">
                  <figure className="w-[80px] h-[80px] flex-grow-0">
                    <img
                      src={img4}
                      alt=""
                      className="h-[80px] w-[80px] rounded-[10px]"
                    />
                  </figure>
                  <div className="flex flex-col">
                    <p className="text-[14px]">Modern home in Milan </p>
                    <p className="text-[--silver] text-xs">03 Aug 2022</p>
                  </div>
                </div>
                <div className="flex gap-x-4 items-center">
                  <figure className="w-[80px] h-[80px] flex-grow-0">
                    <img
                      src={img4}
                      alt=""
                      className="h-[80px] w-[80px] rounded-[10px]"
                    />
                  </figure>
                  <div className="flex flex-col">
                    <p className="text-[14px]">Colorful office redesign </p>
                    <p className="text-[--silver] text-xs">03 Aug 2022</p>
                  </div>
                </div>
              </div>
            </div>
            {/* end bottom part */}
          </div>
        </div>
      </section>
    </>
  );
}
