import './index.scss'
import { playGame } from './js/function'

import buildHeaderStructure from './js/header.js'
import { mainRenderSubCard, firstRenderCard, buildMainStructure } from './js/main.js'

buildHeaderStructure()
buildMainStructure()
firstRenderCard()
mainRenderSubCard()
