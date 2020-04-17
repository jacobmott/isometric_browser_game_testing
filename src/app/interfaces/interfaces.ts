export interface Point2d {
  x: number;
  y: number;
}
    
    
export interface Direction {
  x: number;
  y: number;
}


export interface DivStyle {
  position: string,
  color: string,     
  width:  string,
  height:  string,
  left : string,
  top: string
}


export interface ImgStyle {
  width:  string,
  height:  string,
}


export interface RenderData{
  imgElement: HTMLImageElement,
  tilePosition: Point2d
}

export interface Player {
  point2d: Point2d;
  speed: number;
  name: string;
  id: number;
  dead: boolean;
}

//export interface Player {
//  rect: Rect;
//  speed: number;
//  name: string;
//  id: number;
//  dead: boolean;
//  state: State;
//  img: string
//}


export enum SpriteTypes {
  GROUND = 1,
  BUILDING = 2,
  ENEMY = 3,
  PLAYER = 4,
}


export interface GlobalConfig{
  zoomLevel: number;
  zoomFactor: number;
  zoomPercent: number;
  canvasWidth: number;
  canvasHeight: number;
  alternateDebugGridLine: number;
  debug: boolean;
  boardCellWidth: number;
  boardCellHeight: number;
  boardCellsWide: number;
  boardCellsHeigh: number;
  boardCenterPointX: number;
  boardCenterPointY: number;
  boardCenterCellNumberX: number;
  boardCenterCellNumberY: number;
  boardCellWidthInitial: number;
  boardCellHeightInitial: number;
  boardHeight: number;
  boardWidth: number;
  boardOffsetX: number;
  boardOffsetY: number;
  boardCellWidthToHeightRatio: number,
  HoveredOverCell: Point2d
}