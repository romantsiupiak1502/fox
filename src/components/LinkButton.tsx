import Link from 'next/link';

type LinkButtonProps = {
  path: string;
  text: string;
};

export const LinkButton = ({ path, text }: LinkButtonProps): JSX.Element => (
  <Link href={path}>
    <div className="text-base text-gray-light p-4">{text}</div>
  </Link>
);
