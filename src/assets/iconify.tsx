import type { SVGProps } from 'react';

interface IconifyProps extends SVGProps<SVGSVGElement> {
	color?: string;
}

type IconifyComponentProps = {
	color?: string;
	size?: string | number;
	className?: string;
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

export const Checkout = ({ color = 'currentColor', size = '1em' }: IconifyComponentProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={size}
			height={size} viewBox="0 0 24 24" style={{ color }}>
			<path d="M0 0h32v32H0z" fill="none" />
  			<path fill={color} d="M4 7a1 1 0 0 0 0 2h2.22l2.624 10.5c.223.89 1.02 1.5 1.937 1.5h12.47c.903 0 1.67-.6 1.907-1.47L27.75 10h-2.094l-2.406 9H10.78L8.157 8.5A1.984 1.984 0 0 0 6.22 7zm18 14c-1.645 0-3 1.355-3 3s1.355 3 3 3s3-1.355 3-3s-1.355-3-3-3m-9 0c-1.645 0-3 1.355-3 3s1.355 3 3 3s3-1.355 3-3s-1.355-3-3-3m3-14v5h-3l4 4l4-4h-3V7zm-3 16c.564 0 1 .436 1 1s-.436 1-1 1s-1-.436-1-1s.436-1 1-1m9 0c.564 0 1 .436 1 1s-.436 1-1 1s-1-.436-1-1s.436-1 1-1" />
		</svg>
	)
}

export const Checked = ({ color = 'currentColor', size = '1em' }: IconifyComponentProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={size}
			height={size} viewBox="0 0 24 24" style={{ color }}>
			<path d="M0 0h24v24H0z" fill="none" />
  			<path fill={color} d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z" />
		</svg>
	)
}

export const BagCheck = ({ color = 'currentColor', size = '1em' }: IconifyComponentProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" style={{ color }}>
			<path d="M0 0h24v24H0z" fill="none" />
			<g fill="none" stroke={color} strokeWidth="1.5">
				<path d="M3.742 20.555C4.942 22 7.174 22 11.64 22h.72c4.466 0 6.699 0 7.899-1.445m-16.517 0c-1.2-1.446-.788-3.64.035-8.03c.585-3.12.877-4.681 1.988-5.603M3.742 20.555Zm16.517 0c1.2-1.446.788-3.64-.035-8.03c-.585-3.12-.878-4.681-1.989-5.603m2.024 13.633ZM18.235 6.922C17.125 6 15.536 6 12.361 6h-.722c-3.175 0-4.763 0-5.874.922m12.47 0Zm-12.47 0Z" />
				<path strokeLinecap="round" strokeLinejoin="round" d="m10 14.3l1.333 1.2l2.667-3" />
				<path strokeLinecap="round" d="M9 6V5a3 3 0 1 1 6 0v1" />
			</g>
		</svg>
	)
}

export const Delete = ({ color = 'currentColor', size = '1em' }: IconifyComponentProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={size}
			height={size} viewBox="0 0 24 24" style={{ color }}>
			<path d="M0 0h24v24H0z" fill="none" />
			<path fill={color} d="M18 19a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V7H4V4h4.5l1-1h4l1 1H19v3h-1zM6 7v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V7zm12-1V5h-4l-1-1h-3L9 5H5v1zM8 9h1v10H8zm6 0h1v10h-1z" />
		</svg>
	)
}

export const CloseEx = ({ color = 'currentColor', size = '1em' }: IconifyComponentProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={size}
			height={size} viewBox="0 0 24 24" style={{ color }}>
			<path d="M0 0h24v24H0z" fill="none" />
			<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 21a9 9 0 1 1 0-18a9 9 0 0 1 0 18zM9 9l6 6m0-6l-6 6" />
		</svg>
	)
}

export const CheckedItem = ({ color = 'currentColor', size = '1em' }: IconifyComponentProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" style={{ color }}>
			{/* <path d="M0 0h24v24H0z" fill="none"/>
			<path fill={color} d="M7.317 3.769a42.5 42.5 0 0 1 9.366 0a4 4 0 0 1 2.82 1.667L11.5 13.439l-2.47-2.47a.75.75 0 1 0-1.06 1.061l3 3a.75.75 0 0 0 1.06 0l8.116-8.115q.033.164.053.333c.37 3.157.37 6.347 0 9.504c-.215 1.836-1.69 3.275-3.516 3.48a42.5 42.5 0 0 1-9.366 0c-1.827-.205-3.302-1.644-3.516-3.48a41 41 0 0 1 0-9.504c.214-1.837 1.69-3.275 3.516-3.48" /> */}
			<path d="M0 0h24v24H0z" fill="none" />
  			<path fill={color} d="M17 5H7c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m-6 10.41L8.29 12.7l1.41-1.41l1.29 1.29l3.29-3.29l1.41 1.41l-4.71 4.71Z" />
		</svg>
	)
}

export const NextSelect = ({ color = 'currentColor', size = '1em' }: IconifyComponentProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={size}
			height={size} viewBox="0 0 24 20" style={{ color }}>
			<path d="M0 0h20v20H0z" fill="none" />
			<path fill={color} d="M7 1L5.6 2.5L13 10l-7.4 7.5L7 19l9-9z" />
		</svg>
	)
}

export const Location = ({ color = 'currentColor', size = '1em' }: IconifyComponentProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={size}
			height={size} style={{ color }} viewBox="0 0 24 20">
			<path d="M0 0h24v24H0z" fill="none" />
			<path fill={color} d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7" />
		</svg>
	)
}

export const Home = ({ color = 'currentColor', size = '1em' }: IconifyComponentProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} style={{ color }} viewBox="0 0 24 24">
			<path d="M0 0h24v24H0z" fill="none" />
			<g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5">
				<path d="M18.6 22H5.4A2.4 2.4 0 0 1 3 19.588V8.332c0-.382.18-.734.48-.965l7.78-5.126a1.195 1.195 0 0 1 1.44 0l7.82 5.126c.3.231.48.583.48.965v11.256A2.4 2.4 0 0 1 18.6 22Z" />
				<path d="M9.8 12h4.4c.44 0 .8.36.8.8V22H9v-9.2c0-.44.36-.8.8-.8Z" />
			</g>
		</svg>
	)
}

export const Orders = ({ color = 'currentColor', size = '1em' }: IconifyComponentProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} style={{ color }} viewBox="0 0 24 24">
			<path d="M0 0h24v24H0z" fill="none" />
			<path fill={color} d="m17.371 18.587l-.655-.656q-.13-.129-.307-.129q-.178 0-.307.129q-.129.128-.129.303t.129.304l.86.86q.186.187.419.187t.419-.187l2.098-2.067q.129-.129.139-.297q.01-.169-.139-.317q-.129-.129-.316-.129t-.317.13zM7.27 8.73h9.462q.213 0 .356-.143t.144-.357q0-.233-.144-.366q-.143-.134-.356-.134H7.269q-.213 0-.357.143t-.143.357t.143.357t.357.143M18 22.116q-1.671 0-2.835-1.165Q14 19.787 14 18.116t1.165-2.836T18 14.116t2.836 1.164T22 18.116q0 1.67-1.164 2.835Q19.67 22.116 18 22.116M4 5.616q0-.672.472-1.144T5.616 4h12.769q.67 0 1.143.472q.472.472.472 1.144v5.317q0 .213-.143.357t-.357.143t-.357-.143t-.143-.357V5.616q0-.231-.192-.424T18.384 5H5.616q-.231 0-.424.192T5 5.616V19.05h6.344q.031.202.073.404q.043.202.11.398q.067.179-.09.293q-.158.115-.3.01l-.249-.17q-.111-.073-.234-.073t-.235.073l-.877.607q-.111.074-.234.074t-.235-.074l-.877-.607q-.112-.073-.235-.073t-.234.073l-.877.607q-.111.074-.234.074t-.235-.074l-.877-.607q-.112-.073-.235-.073t-.234.073L4 20.788zm3.27 10.653h3.874q.214 0 .357-.143t.143-.357t-.143-.356t-.357-.144H7.27q-.213 0-.357.144t-.143.356t.143.357t.357.143m0-3.769h7.204q.213 0 .357-.143t.143-.357t-.143-.357t-.357-.143H7.269q-.213 0-.357.143T6.77 12t.143.357t.357.143M5 19.05V5z" />
		</svg>
	)
}

export const User = ({ color = 'currentColor', size = '1em' }: IconifyComponentProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={size}
			height={size} style={{ color }} viewBox="0 0 24 24">
			<path d="M0 0h24v24H0z" fill="none" />
			<g fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
				<circle cx="12" cy="8" r="5" />
				<path d="M20 21a8 8 0 0 0-16 0" />
			</g>
		</svg>
	)
}

export const Logout = ({ color = 'currentColor', size = '1em' }: IconifyComponentProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} style={{ color }} viewBox="0 0 24 24">
			<path d="M0 0h24v24H0z" fill="none" />
			<path fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.5 8.04c-.041-1.16-.178-1.885-.636-2.453c-.653-.812-1.77-1.066-4.004-1.576l-1-.228c-3.395-.774-5.092-1.161-6.226-.27C2.5 4.405 2.5 6.126 2.5 9.568v4.864c0 3.442 0 5.164 1.134 6.055s2.83.504 6.225-.27l1.002-.228c2.233-.51 3.35-.764 4.003-1.576c.458-.567.595-1.293.636-2.453m3-6.948s3 2.21 3 3s-3 3-3 3m2.5-3H8.5" />
		</svg>
	)
}

export const Arrow = ({ color = 'currentColor', size = '1em', className }: IconifyComponentProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" className={className} width={size} height={size} style={{ color }} viewBox="0 0 24 24">
			<path d="M0 0h24v24H0z" fill="none" />
			<path fill={color} fillRule="evenodd" d="m4 15l8-8l8 8l-2 2l-6-6l-6 6z" />
		</svg>
	)
}