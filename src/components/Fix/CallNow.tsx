import Image from "next/image";
import Link from "next/link";

function CallNow() {
  return (
    <div className="fixed z-10 right-2 md:right-4 bottom-8 md:bottom-4 space-y-2">
      <Link
        href="tel:+917903021397"
        title="Call Now"
        className="flex items-center justify-center p-1 bg-accent-500 rounded-full shadow-lg"
      >
        <Image
          src={"/img/telephone.png"}
          alt={"telephone"}
          width={"48"}
          height={"48"}
          quality={100}
          blurDataURL="data:..."
          placeholder="blur"
          className="animate-bounce"
        />
        <strong className="p-2 hidden md:block">+91 7903021397</strong>
      </Link>
    </div>
  );
}

export default CallNow;
