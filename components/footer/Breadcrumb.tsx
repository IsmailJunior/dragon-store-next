import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

function Breadcrumb() {
  const router = useRouter();
  const pathname = router.pathname;
  return (
		<div className="flex flex-row-reverse items-center gap-2 mb-2 py-4 border-b md:border-none">
			<span>
				<ChevronLeftIcon className="text-slate-400" width={20} />
			</span>
			<span className="capitalize">
				{pathname === "/store" ? "Apple Store Online" : null}
			</span>
		</div>
  );
}

export default Breadcrumb;
