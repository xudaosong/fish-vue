import Home from './home'
import {
  FishViewSimple,
  FishViewFooter,
  FishViewNested
} from './fish-view'
import {
  FishHeaderSimple
} from './fish-header'
import {
  FishTimeline
} from './fish-timeline'
import {
  FishButton
} from './fish-button'
import {
  FishPreviewer
} from './fish-previewer'
export const Routes = [{
  path: '/',
  component: Home
}, {
  name: 'View Simple',
  path: '/view',
  component: FishViewSimple
}, {
  name: 'View Footer',
  path: '/view/footer',
  component: FishViewFooter
}, {
  name: 'View Nested',
  path: '/view/nested',
  component: FishViewNested
}, {
  name: 'header',
  path: '/header',
  component: FishHeaderSimple
}, {
  name: 'Timeline',
  path: '/timeline',
  component: FishTimeline
}, {
  name: 'Button',
  path: '/button',
  component: FishButton
}, {
  name: 'Previewer',
  path: '/previewer',
  component: FishPreviewer
}]
