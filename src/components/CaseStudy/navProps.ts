export interface CaseStudyBottomNavProps {
	company: string;
	imagePath: string;
	navPath: string;
	title: string;
}

export const scopeBuilderNav: CaseStudyBottomNavProps = {
	company: 'AEP',
	imagePath: '/work/scopebuilder.png',
	navPath: '/work/scopebuilder',
	title: 'ScopeBuilder',
}

export const batteryXtNav: CaseStudyBottomNavProps = {
	company: 'DNV',
	imagePath: '/work/batteryxt.png',
	navPath: '/work/batteryxt',
	title: 'Battery XT',
}

export const flyNetJetsNav: CaseStudyBottomNavProps = {
	company: 'NetJets',
	imagePath: '/work/netjets.png',
	navPath: '/work/netjets',
	title: 'Fly NetJets',
}