import clsx from "clsx";
import Link from "next/link";

type Props = {
  buttonLink: string;
  buttonText: string | null;
  className?: string;
};
export default function CustomButton({
  buttonLink,
  buttonText,
  className,
}: Props) {
  return (
    <Link
      href={buttonLink}
      className={clsx(
        "rounded-xl bg-orange-600 px-5 py-4 text-center text-xl font-bold tracking-wide text-white uppercase transition-colors duration-150 hover:bg-orange-700 md:text-2xl",
        className,
      )}
    >
      {buttonText}
    </Link>
  );
}
