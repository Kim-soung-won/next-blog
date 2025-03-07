"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ImageModal({ newsItem }: { newsItem: any }) {
  const router = useRouter();

  return (
    <>
      <div
        className="modal-backdrop"
        onClick={() => router.back()}
      />
      <dialog
        className="modal"
        open
      >
        <div className="fullscreen-image">
          <Image
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            width={100}
            height={100}
          />
        </div>
      </dialog>
    </>
  );
}
