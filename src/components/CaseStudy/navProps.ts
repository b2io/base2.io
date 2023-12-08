export interface CaseStudyBottomNavChild {
  company: string;
  imagePath: string;
  navPath: string;
  title: string;
  id: number;
}

export const scopeBuilderNav: CaseStudyBottomNavChild = {
  id: 0,
  company: 'AEP',
  imagePath: '/work/scopebuilder.png',
  navPath: '/work/scopebuilder',
  title: 'ScopeBuilder',
};

export const batteryXtNav: CaseStudyBottomNavChild = {
  id: 1,
  company: 'DNV',
  imagePath: '/work/batteryxt.png',
  navPath: '/work/batteryxt',
  title: 'Battery XT',
};

export const flyNetJetsNav: CaseStudyBottomNavChild = {
  id: 2,
  company: 'NetJets',
  imagePath: '/work/netjets.png',
  navPath: '/work/netjets',
  title: 'Fly NetJets',
};

export const colorSnapNav: CaseStudyBottomNavChild = {
  id: 3,
  company: 'Sherwin-Williams',
  imagePath: '/work/colorsnap.png',
  navPath: '/work/colorsnap',
  title: 'ColorSnap Visualizer',
};

export const allStudies = [
  scopeBuilderNav,
  batteryXtNav,
  flyNetJetsNav,
  colorSnapNav,
];
