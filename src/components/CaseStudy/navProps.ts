export interface CaseStudyPageConfig {
  company: string;
  imagePath: string;
  navPath: string;
  title: string;
  id: number;
}

export const scopeBuilderNav: CaseStudyPageConfig = {
  company: 'AEP',
  id: 0,
  imagePath: '/work/scopebuilder.png',
  navPath: '/work/scopebuilder',
  title: 'ScopeBuilder',
};

export const batteryXtNav: CaseStudyPageConfig = {
  company: 'DNV',
  id: 1,
  imagePath: '/work/batteryxt.png',
  navPath: '/work/batteryxt',
  title: 'Battery XT',
};

export const flyNetJetsNav: CaseStudyPageConfig = {
  company: 'NetJets',
  id: 2,
  imagePath: '/work/netjets.png',
  navPath: '/work/netjets',
  title: 'Fly NetJets',
};

export const colorSnapNav: CaseStudyPageConfig = {
  company: 'Sherwin-Williams',
  id: 3,
  imagePath: '/work/colorsnap.png',
  navPath: '/work/colorsnap',
  title: 'ColorSnap Visualizer',
};

export const CASE_STUDIES: CaseStudyPageConfig[] = [
  scopeBuilderNav,
  batteryXtNav,
  flyNetJetsNav,
  colorSnapNav,
];
