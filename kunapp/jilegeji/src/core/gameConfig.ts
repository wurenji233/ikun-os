/**
 * 素材列表
 */
export const BASE_IMAGE_URL = "/img/";
export const AUDIO_URL = "/music.mp3";
export const materialList: Record<string,string> [] = new Array(20).fill(null).map((item,index) => ({ label:`表情包-${index + 1}`,value:`${BASE_IMAGE_URL + (index + 1)}.jpg`}));

// console.log(111,materialList);

/**
 *  默认配置
 */
export const defaultGameConfig = {
    // 槽容量
    slotNum: 7,
    // 合成块数量
    composeNum: 3,
    // 素材类别数
    materialTypeNum:12,
    // 每层块数
    levelBlockNum: 24,
    // 边界收缩步长
    borderStep: 1,
    // 总层数,最小值应该是2
    levelNum: 6,
    // 随机区块数（数组长度代表随机区数量，值表示每个随机区生产多少块）
    randomBlocks:[8,8],
    // 素材数组
    materialList
}

/**
 * 简单难度
 */
 export const easyGameConfig: GameConfigType = {
    // 槽容量
    slotNum: 7,
    // 需要多少个一样块的才能合成
    composeNum: 3,
    // 动物类别数
    materialTypeNum: 8,
    // 每层块数（大致）
    levelBlockNum: 10,
    // 边界收缩步长
    borderStep: 1,
    // 总层数（最小为 2）
    levelNum: 6,
    // 随机区块数（数组长度代表随机区数量，值表示每个随机区生产多少块）
    randomBlocks: [4, 4],
    // 素材列表
    materialList,
  };
  
  /**
   * 中等难度
   */
  export const middleGameConfig: GameConfigType = {
    // 槽容量
    slotNum: 7,
    // 需要多少个一样块的才能合成
    composeNum: 3,
    // 动物类别数
    materialTypeNum: 10,
    // 每层块数（大致）
    levelBlockNum: 12,
    // 边界收缩步长
    borderStep: 1,
    // 总层数（最小为 2）
    levelNum: 7,
    // 随机区块数（数组长度代表随机区数量，值表示每个随机区生产多少块）
    randomBlocks: [5, 5],
    // 素材列表
    materialList,
  };
  
  /**
   * 困难难度
   */
  export const hardGameConfig: GameConfigType = {
    // 槽容量
    slotNum: 7,
    // 需要多少个一样块的才能合成
    composeNum: 3,
    // 动物类别数
    materialTypeNum: 12,
    // 每层块数（大致）
    levelBlockNum: 16,
    // 边界收缩步长
    borderStep: 1,
    // 总层数（最小为 2）
    levelNum: 8,
    // 随机区块数（数组长度代表随机区数量，值表示每个随机区生产多少块）
    randomBlocks: [6, 6],
    // 素材列表
    materialList,
  };
  
  /**
   * 地狱难度
   */
  export const lunaticGameConfig: GameConfigType = {
    // 槽容量
    slotNum: 7,
    // 需要多少个一样块的才能合成
    composeNum: 3,
    // 动物类别数
    materialTypeNum: 16,
    // 每层块数（大致）
    levelBlockNum: 20,
    // 边界收缩步长
    borderStep: 2,
    // 总层数（最小为 2）
    levelNum: 10,
    // 随机区块数（数组长度代表随机区数量，值表示每个随机区生产多少块）
    randomBlocks: [8, 8],
    // 素材列表
    materialList,
  };
  
  /**
   * 羊了个羊难度
   */
  export const yangGameConfig: GameConfigType = {
    // 槽容量
    slotNum: 7,
    // 需要多少个一样块的才能合成
    composeNum: 3,
    // 动物类别数
    materialTypeNum: 18,
    // 每层块数（大致）
    levelBlockNum: 24,
    // 边界收缩步长
    borderStep: 2,
    // 总层数（最小为 2）
    levelNum: 12,
    // 随机区块数（数组长度代表随机区数量，值表示每个随机区生产多少块）
    randomBlocks: [8, 8],
    // 素材列表
    materialList,
  };
  
  /**
   * 开团难度
   */
  export const kunGameConfig: GameConfigType = {
    // 槽容量
    slotNum: 7,
    // 需要多少个一样块的才能合成
    composeNum: 3,
    // 动物类别数
    materialTypeNum: 20,
    // 每层块数（大致）
    levelBlockNum: 28,
    // 边界收缩步长
    borderStep: 3,
    // 总层数（最小为 2）
    levelNum: 15,
    // 随机区块数（数组长度代表随机区数量，值表示每个随机区生产多少块）
    randomBlocks: [8, 8],
    // 素材列表
    materialList,
  };