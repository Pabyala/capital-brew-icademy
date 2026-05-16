import type { SVGProps } from 'react';

interface IconifyProps extends SVGProps<SVGSVGElement> {
	color?: string; 
}

export function MdiEmailCheck(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}><path fill="#AA6833" d="M13 19c0-3.31 2.69-6 6-6c1.1 0 2.12.3 3 .81V6a2 2 0 0 0-2-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h9.09c-.05-.33-.09-.66-.09-1M4 8V6l8 5l8-5v2l-8 5zm13.75 14.16l-2.75-3L16.16 18l1.59 1.59L21.34 16l1.16 1.41z"></path></svg>);
}

export function MaterialSymbolsLightCloudLockRounded(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}><path fill="#AA6833" d="M6.5 19q-1.871 0-3.185-1.301Q2 16.397 2 14.516q0-1.776 1.223-3.08t2.873-1.402q.337-2.185 2.01-3.61T12 5q1.97 0 3.505 1.126t2.152 2.896q.077.253-.06.468t-.395.258q-1.685.402-2.742 1.751t-1.056 3.078v3.615q0 .344-.232.576q-.233.232-.576.232zm10.096 0q-.343 0-.575-.232t-.233-.576v-2.711q0-.348.269-.568t.635-.22v-1q0-.707.504-1.21t1.21-.502q.708 0 1.199.502q.491.503.491 1.21v1q.368 0 .636.22t.268.568v2.711q0 .344-.232.576t-.576.232zm.866-4.308h1.865v-1q0-.425-.249-.683q-.25-.259-.674-.259t-.684.259q-.258.258-.258.683z"></path></svg>);
}

export function RiAccountCircleLine({ color = '#AA6833', ...props }: IconifyProps) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}><path fill={color} d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m.16 14a6.98 6.98 0 0 0-5.147 2.256A7.97 7.97 0 0 0 12 20a7.97 7.97 0 0 0 5.167-1.892A6.98 6.98 0 0 0 12.16 16M12 4a8 8 0 0 0-6.384 12.821A8.98 8.98 0 0 1 12.16 14a8.97 8.97 0 0 1 6.362 2.634A8 8 0 0 0 12 4m0 1a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></path></svg>);
}

export function TdesignLocation1Filled({ color = '#807d7d', ...props }: IconifyProps) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}><path fill={color} d="M7 6a5 5 0 1 1 6 4.9V17h-2v-6.1A5 5 0 0 1 7 6m-3.895 5H8v2H4.895l-.778 7h15.766l-.778-7H16v-2h4.895l1.222 11H1.883z"></path></svg>);
}

export function StreamlineFlexHome2Remix({ color = '#5e5d5d', ...props }: IconifyProps) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14" {...props}><path fill={color} fillRule="evenodd" d="M6.04 1.293a1.72 1.72 0 0 1 1.921 0l.664.454a19.6 19.6 0 0 1 4.969 4.866l.213.302c.26.37.242.814.038 1.147a1.13 1.13 0 0 1-.974.534h-.567c.03.928-.023 2.042-.16 2.843C11.983 12.384 11.11 13 10.18 13H3.82c-.93 0-1.803-.616-1.964-1.56c-.137-.802-.19-1.916-.16-2.844h-.568c-.411 0-.775-.209-.974-.534a1.035 1.035 0 0 1 .04-1.147l.212-.302a19.6 19.6 0 0 1 4.97-4.866zm1.215 1.032a.47.47 0 0 0-.51 0l-.664.454a18.4 18.4 0 0 0-4.653 4.555l-.009.012h.94a.625.625 0 0 1 .622.681c-.083.911-.046 2.31.107 3.202c.043.253.315.521.732.521h1.262V9.335a1.918 1.918 0 1 1 3.835 0v2.415h1.263c.417 0 .689-.268.732-.521c.153-.892.19-2.29.107-3.202a.625.625 0 0 1 .622-.681h.94l-.009-.012A18.4 18.4 0 0 0 7.92 2.779z" clipRule="evenodd"></path></svg>);
}

export function GridiconsSearch({color = 'currentColor', ...props}: IconifyProps) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}><path fill="currentColor" d="m21 19l-5.154-5.154a7 7 0 1 0-2 2L19 21zM5 10c0-2.757 2.243-5 5-5s5 2.243 5 5s-2.243 5-5 5s-5-2.243-5-5"></path></svg>);
}

type IconifyComponentProps = {
	color?: string
	size?: string | number
}

export const HotCoffee = ({ color = 'currentColor', size = '1em' }: IconifyComponentProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={size}
			height={size} viewBox="0 0 24 24" style={{ color }}>
			<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 10h1.5a2.5 2.5 0 0 1 0 5H18m0-5c0-.53-.36-1-.923-1H4.923A.923.923 0 0 0 4 9.923V17a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-2m0-5v5M16 3l-2 3m-1-3l-2 3m-1-3L8 6"></path>
		</svg>
	)
}

export const BurgerMenu = ({ color = 'currentColor', size = '1em' }: IconifyComponentProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={size}
			height={size} viewBox="0 0 24 24" style={{ color }}>
			<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 6.001h18m-18 6h18m-18 6h18"></path>
		</svg>
	)
}

export const Cart = ({ color = 'currentColor', size = '1em' }: IconifyComponentProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={size}
			height={size} viewBox="0 0 24 24" style={{ color }}>
			<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 21a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-8 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M3.71 5.4h15.214c1.378 0 2.373 1.27 1.995 2.548l-1.654 5.6C19.01 14.408 18.196 15 17.27 15H8.112c-.927 0-1.742-.593-1.996-1.452zm0 0L3 3"></path>
		</svg>
	)
}

export const Branch = ({ color = 'currentColor', size = '1em' }: IconifyComponentProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={size}
			height={size} viewBox="0 0 24 24" style={{ color }}>
			{/* <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.996 10.621V19a2 2 0 0 1-2 2H6.004a2 2 0 0 1-1.999-2v-8.379M7.502 8.75l.5-5.75m-.5 5.75c0 2.902 4.498 2.902 4.498 0m-4.498 0c0 3.176-5.155 2.52-4.433-.248l1.045-4.007A2 2 0 0 1 6.048 3h11.904a2 2 0 0 1 1.934 1.495l1.045 4.007c.722 2.769-4.433 3.424-4.433.248M12 8.75V3m0 5.75c0 2.902 4.498 2.902 4.498 0m0 0l-.5-5.75"></path> */}
			<path fill="currentColor" d="M3.5 2.5h17v2h-17zm-.82 3h18.64l1.18 5.901V13.5H21v8h-2v-8h-5v8H3v-8H1.5v-2.099zm2.32 8v6h7v-6z"></path>
		</svg>
	)
}