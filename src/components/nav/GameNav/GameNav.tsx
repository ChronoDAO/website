import { useState } from 'react'
import './GameNav.scss'
import Bigtime from './Tab/Bigtime'
import Reign from './Tab/Reign'
import Desol from './Tab/Desol'
import World from './Tab/World'
import Shatter from './Tab/Shatter'
import Boss from './Tab/Boss'

export default function GameNav() {
    const [tab, setTab] = useState('bigtime')
  return (
    <>
    <div className="game-nav__wrapper">
        <ul>
            <li>
                <button onClick={() => setTab('bigtime')}>
                    <img src="/images/assets/gameLogo/BigT.png" alt="" />
                </button>
            </li>
            <li>
                <button onClick={() => setTab('reign')}>
                    <img src="/images/assets/gameLogo/ReignO.png" alt="" />
                </button>
            </li>
            <li>
                <button onClick={() => setTab('desol')}>
                    <img src="/images/assets/gameLogo/DesoL.png" alt="" />
                </button>
            </li>
            <li>
                <button onClick={() => setTab('shatter')}>
                    <img src="/images/assets/gameLogo/ShatterP.webp" alt="" />
                </button>
            </li>
            <li>
                <button onClick={() => setTab('boss')}>
                    <img src="/images/assets/gameLogo/BossF.png" alt="" />
                </button>
            </li>
            <li>
                <button onClick={() => setTab('world')}>
                    <img src="/images/assets/gameLogo/WorldS.png" alt="" />
                </button>
            </li>
        </ul>
    </div>
    <>
        {tab === 'bigtime' && <Bigtime/>}
        {tab === 'reign' && <Reign/>}
        {tab === 'desol' && <Desol/>}
        {tab === 'world' && <World/>}
        {tab === 'shatter' && <Shatter/>}
        {tab === 'boss' && <Boss/>}

    </>
    </>
    )
}
