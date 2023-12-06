export interface CaseStudyBottomNavChild {
  company: string;
  imagePath: string;
  navPath: string;
  title: string;
  id: number;
}

export const scopeBuilderNav: CaseStudyBottomNavChild = {
  company: 'AEP',
  imagePath: '/work/scopebuilder.png',
  navPath: '/work/scopebuilder',
  title: 'ScopeBuilder',
  id: 0,
};

export const batteryXtNav: CaseStudyBottomNavChild = {
  company: 'DNV',
  imagePath: '/work/batteryxt.png',
  navPath: '/work/batteryxt',
  title: 'Battery XT',
  id: 1,
};

export const flyNetJetsNav: CaseStudyBottomNavChild = {
  company: 'NetJets',
  imagePath: '/work/netjets.png',
  navPath: '/work/netjets',
  title: 'Fly NetJets',
  id: 2,
};

export const colorSnapNav: CaseStudyBottomNavChild = {
  company: 'Sherwin-Williams',
  imagePath: '/work/colorsnap.png',
  navPath: '/work/colorsnap',
  title: 'ColorSnap Visualizer',
  id: 3,
};

export const allStudies = [
  scopeBuilderNav,
  batteryXtNav,
  flyNetJetsNav,
  colorSnapNav,
];
