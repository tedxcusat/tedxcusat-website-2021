import React, {Suspense} from 'react';
import { EffectComposer, SSAO, ChromaticAberration, DepthOfField, Bloom, Outline, SelectiveBloom, Noise, Vignette} from "react-postprocessing"

function Effects({boxRef,textRef}) {
    return (
    <Suspense fallback={null}>
        <EffectComposer>
            {/* <ChromaticAberration offset={[0.00009, 0.00009]} /> */}
            {/* <SSAO /> */}
            {/* <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} /> */}
            <Bloom luminanceThreshold={0.8}  />
            <Outline xRay={true} width={1} selection={boxRef} visibleEdgeColor={0}/>
            {/* <SelectiveBloom  luminanceThreshold={0.6} selection={boxRef} /> */}
            {/* <SelectiveBloom  luminanceThreshold={0.01} selection={textRef} /> */}
            <Noise opacity={0.02} />
            <Vignette eskil={false} offset={0.1} darkness={0.5} />
        </EffectComposer>
    </Suspense>
    );
}

export default Effects;