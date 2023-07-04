import './index.scss'
import { buildHeaderStructure } from './js/header.js'
import { mainRenderSubCard, firstRenderCard, buildMainStructure, buildScore } from './js/main.js'

buildHeaderStructure()
buildMainStructure()
buildScore()
firstRenderCard()
mainRenderSubCard()
