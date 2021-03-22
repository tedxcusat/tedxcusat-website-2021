import React, {Suspense} from 'react';
import { EffectComposer, ChromaticAberration, Bloom, Noise} from "react-postprocessing"

function Effects({TEDxBoxRef,lights,textRef}) {
    return (
    <Suspense fallback={null}>
        <EffectComposer>
            <ChromaticAberration  offset={[0.001, 0.001]} />
            {/* <SSAO /> */}
            {/* <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} /> */}
            <Bloom luminanceSmoothing={0.5} intensity={1} luminanceThreshold={0.6}  />
            {/* <Outline xRay={true} width={1} selection={TEDxBoxRef} visibleEdgeColor={0}/> */}
            {/* <SelectiveBloom luminanceThreshold={0.6} selection={TEDxBoxRef} /> */}
            {/* <SelectiveBloom  luminanceThreshold={0.01} selection={textRef} /> */}
            <Noise opacity={0.02} />
            {/* <Vignette eskil={false} offset={0.1} darkness={0.5} /> */}
        </EffectComposer>
    </Suspense>
    );
}

export default Effects;


