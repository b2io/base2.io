export interface CaseStudyBottomNavChild {
  company: string;
  imagePath: string;
  navPath: string;
  name: string;
  title: string;
  id: number;
}

export const scopeBuilderNav: CaseStudyBottomNavChild = {
  company: 'AEP',
  id: 0,
  imagePath: '/work/scopebuilder.png',
  name: 'scopeBuilder',
  navPath: '/work/scopebuilder',
  title: 'ScopeBuilder',
};

export const batteryXtNav: CaseStudyBottomNavChild = {
  company: 'DNV',
  id: 1,
  imagePath: '/work/batteryxt.png',
  name: 'batteryxt',
  navPath: '/work/batteryxt',
  title: 'Battery XT',
};

export const flyNetJetsNav: CaseStudyBottomNavChild = {
  company: 'NetJets',
  id: 2,
  imagePath: '/work/netjets.png',
  name: 'flynetjets',
  navPath: '/work/netjets',
  title: 'Fly NetJets',
};

export const colorSnapNav: CaseStudyBottomNavChild = {
  company: 'Sherwin-Williams',
  id: 3,
  imagePath: '/work/colorsnap.png',
  name: 'colorsnap',
  navPath: '/work/colorsnap',
  title: 'ColorSnap Visualizer',
};

export const allStudies = [
  scopeBuilderNav,
  batteryXtNav,
  flyNetJetsNav,
  colorSnapNav,
];
