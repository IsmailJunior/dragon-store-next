import {
	doc,
	getDoc,
	collection,
	getDocs,
	query,
	orderBy,
} from "firebase/firestore";
import { store } from "@/lib/firebase";
const navbarRef = collection(store, "navbar");
const itemsRef = collection(store, "items");
const landingPageRef = collection(store, "landingPage");
const storePageRef = collection(store, "storePage");
export const getLandingDocs = async () => {
	try {
		//get original items
		const itemsDocsSnapshot = await getDocs(itemsRef);
		const items = itemsDocsSnapshot.docs.map(item => ({
			...item.data(),
			id: item.id,
		}));
		//get landing refrences
		const landingDocRef = doc(landingPageRef, "landing");
		const landingDocSnapshot = await getDoc(landingDocRef);
		const landingRef = landingDocSnapshot.data();
		//sort items to match landing refrences
		const landing = {
			primaryBanner: items.filter(
				item => item.id === landingRef?.primaryBanner.id
			)[0],
			secondaryBanner: items.filter(
				item => item.id === landingRef?.secondaryBanner.id
			)[0],
			trinaryBanner: items.filter(
				item => item.id === landingRef?.trinaryBanner.id
			)[0],
			primaryBannerLeftSideBanner: items.filter(
				item => item.id === landingRef?.primaryBannerLeftSideBanner.id
			)[0],
			primaryBannerRightSideBanner: items.filter(
				item => item.id === landingRef?.primaryBannerRightSideBanner.id
			)[0],
			secondaryBannerLeftSideBanner: items.filter(
				item => item.id === landingRef?.secondaryBannerLeftSideBanner.id
			)[0],
			secondaryBannerRightSideBanner: items.filter(
				item =>
					item.id === landingRef?.secondaryBannerRightSideBanner.id
			)[0],
			trinaryBannerLeftSideBanner: items.filter(
				item => item.id === landingRef?.trinaryBannerLeftSideBanner.id
			)[0],
			trinaryBannerRightSideBanner: items.filter(
				item => item.id === landingRef?.trinaryBannerRightSideBanner.id
			)[0],
		};
		return landing;
	} catch (error) {
		console.error(error);
	}
};

export const getStoreDocs = async () => {
	try {
		//get original items
		const itemsDocsSnapshot = await getDocs(itemsRef);
		const items = itemsDocsSnapshot.docs.map(item => ({
			...item.data(),
			id: item.id,
		}));
		//get store refrences
		const storeDocRef = doc(storePageRef, "store");
		const storeDocSnapshot = await getDoc(storeDocRef);
		const sectionsRef = storeDocSnapshot.data();
		//sort items to match store refrences
		const sections = sectionsRef?.sections.map((section: any) => {
			section.items.forEach((itemRef: any, index: number, arr: any) => {
				arr[index] = items.filter(item => item.id === itemRef.id).at(0);
			});
			return section;
		});
		return sections;
	} catch (error) {
		console.error(error);
	}
};

export const getItemsDocs = async () => {
	try {
		const itemsSnapshot = await getDocs(itemsRef);
		const items = itemsSnapshot.docs.map(itemSnapshot => ({
			...itemSnapshot.data(),
			id: itemSnapshot.id,
		}));
		return items;
	} catch (error) {
		console.error(error);
	}
};

export const getItemDoc = async (id: string) => {
	try {
		const itemDocRef = doc(itemsRef, id);
		const itemSnapshot = await getDoc(itemDocRef);
		return itemSnapshot.data();
	} catch (error) {
		console.error(error);
	}
};

export const getNavbarDocs = async () => {
	try {
		const orderdDocs = query(navbarRef, orderBy("order", "desc"));
		const navbarDocsSnapshot = await getDocs(orderdDocs);
		const navbarDocs = navbarDocsSnapshot.docs.map(doc => doc.data());
		return navbarDocs;
	} catch (error) {
		console.error(error);
	}
};
