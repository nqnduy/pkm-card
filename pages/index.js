import MasterPageExample from "components/website/master/MasterPageExample";
import dynamic from 'next/dynamic';
const HomePage = dynamic(() => import('@/website/pages/HomePage'));

export default function Home(props) {
	// const router = useRouter();
	return (
		<MasterPageExample hidePrevButton>
			<HomePage/>
		</MasterPageExample>
	);
}
