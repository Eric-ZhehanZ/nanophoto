import { clsx } from 'clsx/lite';
import Link from 'next/link';
import { BiSolidUser } from 'react-icons/bi';

const USER_NAME = 'ZhehanZ';
const USER_URL = 'https://zhehanz.com';

export default function RepoLink() {
  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap">
      Photos by
      <Link
        href={USER_URL}
        target="_blank"
        className={clsx(
          'flex items-center gap-0.5',
          'text-main hover:text-main',
          'hover:text-medium active:text-dim',
        )}
      >
        <BiSolidUser
          size={16}
          className="translate-y-[0.5px] hidden xs:inline-block"
        />
        {USER_NAME}
      </Link>
    </span>
  );
}
