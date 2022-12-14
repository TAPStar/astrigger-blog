/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import { BsGithub, BsTwitter } from "react-icons/bs";
import { SiZenn } from "react-icons/si";

const Aboutme: NextPage = () => {
  return (
    <div className="text-center">
      <div className="relative w-32 h-32 mx-auto">
        <Image
          className="rounded-full"
          src="/top/mypicture.png"
          alt="Portrait"
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>

      <div className="h-8" />
      <div className="flex flex-row justify-center">
        <Link href="https://github.com/TAPStar">
          <a className="text-3xl text-gray-900 hover:text-indigo-700">
            <div className="mx-4">
              <BsGithub />
            </div>
          </a>
        </Link>
        <Link href="https://twitter.com/asakuramen_17">
          <a className="text-3xl text-gray-900 hover:text-indigo-700">
            <div className="mx-4">
              <BsTwitter />
            </div>
          </a>
        </Link>
        <Link href="https://zenn.dev/angelecho">
          <a className="text-3xl text-gray-900 hover:text-indigo-700">
            <div className="mx-4">
              <SiZenn />
            </div>
          </a>
        </Link>
      </div>

      <div className="h-8" />

      <div className="px-4 text-gray-700">
        <p>あさくらーめん</p>
        <p>東京在住のフルスタックエンジニアです。WEB開発を主軸に活動しています。</p>
        <p>本業ではインフラ系SIer 兼 SW開発ベンダで仕事をしています。好奇心旺盛です。</p>
      </div>
    </div>
  );
};

export default Aboutme;
