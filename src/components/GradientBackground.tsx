import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

export const GradientBackground = () => {
  return (
    <ShaderGradientCanvas
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
      pixelDensity={0.9}
      fov={45}
    >
      <ShaderGradient
        control="query"
        urlString="https://shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.9&cAzimuthAngle=60&cDistance=7.1&cPolarAngle=90&cameraZoom=15.22&color1=%239f8579&color2=%23bea0ac&color3=%23bb796e&destination=onCanvas&embedMode=off&envPreset=dawn&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=0.9&positionX=0&positionY=-0.15&positionZ=0&range=disabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=0&shader=defaults&type=sphere&uAmplitude=0&uDensity=1.1&uFrequency=5.5&uSpeed=0.3&uStrength=0.4&uTime=0&wireframe=false"
      />
    </ShaderGradientCanvas>
  )
}
