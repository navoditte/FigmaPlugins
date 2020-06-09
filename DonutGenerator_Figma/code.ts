figma.showUI(__html__)
figma.ui.onmessage = numbers => {
  const width = 100
  const height = 100
  
  const frame = figma.createFrame()
  figma.currentPage.appendChild(frame)
  frame.resizeWithoutConstraints(width, height)
    const ellipse = figma.createEllipse()
    frame.appendChild(ellipse)
    ellipse.resizeWithoutConstraints(width, height)
    ellipse.constraints = {horizontal: 'STRETCH', vertical: 'STRETCH'}
    ellipse.arcData = {startingAngle: Math.PI * -0.5, endingAngle: (((numbers/50) * Math.PI)+ (Math.PI * -0.5)), innerRadius: 0.75}
    ellipse.cornerRadius = 25

  figma.closePlugin()
}