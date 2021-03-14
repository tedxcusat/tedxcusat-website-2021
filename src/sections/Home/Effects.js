import React, {Suspense} from 'react';
import { EffectComposer, SSAO, ChromaticAberration, Bloom } from "react-postprocessing"

function Effects(props) {
    return (
    <Suspense fallback={null}>
        <EffectComposer>
            <ChromaticAberration offset={[0.00009, 0.00009]} />
            <SSAO />
            <Bloom luminanceThreshold={0.6} />
        </EffectComposer>
    </Suspense>
    );
}

export default Effects;