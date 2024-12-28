import { MenuItemInterface } from '@/interfaces';
import Link from 'next/link';

export default function MenuItems(props: MenuItemInterface) {
  return (
    <li className='p-1 text-neutral-100'>
      <Link href={props.url}>{props.label}</Link>
    </li>
  );
}