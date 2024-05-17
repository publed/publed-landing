import LogoGrayPubled from '../icons/LogoGrayPubled';
import { PlusIcon } from '@heroicons/react/20/solid'

export default function Divider() {
    return (
        <div className="relative py-4">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center">
                <span className="px-4 text-gray-500">
                    <LogoGrayPubled className="h-8 w-8 fill-gray-400 hover:fill-gray-300" />
                </span>
            </div>
        </div>
    )
}
