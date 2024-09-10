import Link from 'next/link'
import { IButton } from '../../types/button.type'

export const PrimaryButton: React.FC<IButton> = (props: IButton): JSX.Element => {
    return (
      // <button className="bg-secondary p-1 px-7 py-2 rounded-full text-sm">{props.name}</button>
      <Link
        download="cv_of_abdul_malek.pdf"
        className="bg-secondary p-1 px-7 py-2 rounded-full text-sm"
        href="/cv_of_abdul_malek.pdf"
        target="_blank"
        
      >
        {props.name}
      </Link>
    );
}