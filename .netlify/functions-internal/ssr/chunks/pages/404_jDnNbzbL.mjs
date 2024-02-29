import '@astrojs/internal-helpers/path';
import { A as AstroError, c as InvalidImageService, d as ExpectedImageOptions, E as ExpectedImage, F as FailedToFetchRemoteImageDimensions, e as createAstro, f as createComponent, g as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, h as addAttribute, s as spreadAttributes, i as renderHead, j as renderComponent, u as unescapeHTML, k as Fragment, l as renderSlot } from '../astro_oCEbWNjX.mjs';
import 'kleur/colors';
import 'clsx';
import { getIconData, iconToSVG } from '@iconify/utils';
/* empty css                          */
/* empty css                        */
import { i as isRemoteImage, a as isESMImportedImage, b as isLocalService, D as DEFAULT_HASH_PROPS } from '../astro/assets-service_tYo8wRsC.mjs';

const decoder = new TextDecoder();
const toUTF8String = (input, start = 0, end = input.length) => decoder.decode(input.slice(start, end));
const toHexString = (input, start = 0, end = input.length) => input.slice(start, end).reduce((memo, i) => memo + ("0" + i.toString(16)).slice(-2), "");
const readInt16LE = (input, offset = 0) => {
  const val = input[offset] + input[offset + 1] * 2 ** 8;
  return val | (val & 2 ** 15) * 131070;
};
const readUInt16BE = (input, offset = 0) => input[offset] * 2 ** 8 + input[offset + 1];
const readUInt16LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8;
const readUInt24LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16;
const readInt32LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16 + (input[offset + 3] << 24);
const readUInt32BE = (input, offset = 0) => input[offset] * 2 ** 24 + input[offset + 1] * 2 ** 16 + input[offset + 2] * 2 ** 8 + input[offset + 3];
const readUInt32LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16 + input[offset + 3] * 2 ** 24;
const methods = {
  readUInt16BE,
  readUInt16LE,
  readUInt32BE,
  readUInt32LE
};
function readUInt(input, bits, offset, isBigEndian) {
  offset = offset || 0;
  const endian = isBigEndian ? "BE" : "LE";
  const methodName = "readUInt" + bits + endian;
  return methods[methodName](input, offset);
}
function readBox(buffer, offset) {
  if (buffer.length - offset < 4)
    return;
  const boxSize = readUInt32BE(buffer, offset);
  if (buffer.length - offset < boxSize)
    return;
  return {
    name: toUTF8String(buffer, 4 + offset, 8 + offset),
    offset,
    size: boxSize
  };
}
function findBox(buffer, boxName, offset) {
  while (offset < buffer.length) {
    const box = readBox(buffer, offset);
    if (!box)
      break;
    if (box.name === boxName)
      return box;
    offset += box.size;
  }
}

const BMP = {
  validate: (input) => toUTF8String(input, 0, 2) === "BM",
  calculate: (input) => ({
    height: Math.abs(readInt32LE(input, 22)),
    width: readUInt32LE(input, 18)
  })
};

const TYPE_ICON = 1;
const SIZE_HEADER$1 = 2 + 2 + 2;
const SIZE_IMAGE_ENTRY = 1 + 1 + 1 + 1 + 2 + 2 + 4 + 4;
function getSizeFromOffset(input, offset) {
  const value = input[offset];
  return value === 0 ? 256 : value;
}
function getImageSize$1(input, imageIndex) {
  const offset = SIZE_HEADER$1 + imageIndex * SIZE_IMAGE_ENTRY;
  return {
    height: getSizeFromOffset(input, offset + 1),
    width: getSizeFromOffset(input, offset)
  };
}
const ICO = {
  validate(input) {
    const reserved = readUInt16LE(input, 0);
    const imageCount = readUInt16LE(input, 4);
    if (reserved !== 0 || imageCount === 0)
      return false;
    const imageType = readUInt16LE(input, 2);
    return imageType === TYPE_ICON;
  },
  calculate(input) {
    const nbImages = readUInt16LE(input, 4);
    const imageSize = getImageSize$1(input, 0);
    if (nbImages === 1)
      return imageSize;
    const imgs = [imageSize];
    for (let imageIndex = 1; imageIndex < nbImages; imageIndex += 1) {
      imgs.push(getImageSize$1(input, imageIndex));
    }
    return {
      height: imageSize.height,
      images: imgs,
      width: imageSize.width
    };
  }
};

const TYPE_CURSOR = 2;
const CUR = {
  validate(input) {
    const reserved = readUInt16LE(input, 0);
    const imageCount = readUInt16LE(input, 4);
    if (reserved !== 0 || imageCount === 0)
      return false;
    const imageType = readUInt16LE(input, 2);
    return imageType === TYPE_CURSOR;
  },
  calculate: (input) => ICO.calculate(input)
};

const DDS = {
  validate: (input) => readUInt32LE(input, 0) === 542327876,
  calculate: (input) => ({
    height: readUInt32LE(input, 12),
    width: readUInt32LE(input, 16)
  })
};

const gifRegexp = /^GIF8[79]a/;
const GIF = {
  validate: (input) => gifRegexp.test(toUTF8String(input, 0, 6)),
  calculate: (input) => ({
    height: readUInt16LE(input, 8),
    width: readUInt16LE(input, 6)
  })
};

const brandMap = {
  avif: "avif",
  mif1: "heif",
  msf1: "heif",
  // hief-sequence
  heic: "heic",
  heix: "heic",
  hevc: "heic",
  // heic-sequence
  hevx: "heic"
  // heic-sequence
};
function detectBrands(buffer, start, end) {
  let brandsDetected = {};
  for (let i = start; i <= end; i += 4) {
    const brand = toUTF8String(buffer, i, i + 4);
    if (brand in brandMap) {
      brandsDetected[brand] = 1;
    }
  }
  if ("avif" in brandsDetected) {
    return "avif";
  } else if ("heic" in brandsDetected || "heix" in brandsDetected || "hevc" in brandsDetected || "hevx" in brandsDetected) {
    return "heic";
  } else if ("mif1" in brandsDetected || "msf1" in brandsDetected) {
    return "heif";
  }
}
const HEIF = {
  validate(buffer) {
    const ftype = toUTF8String(buffer, 4, 8);
    const brand = toUTF8String(buffer, 8, 12);
    return "ftyp" === ftype && brand in brandMap;
  },
  calculate(buffer) {
    const metaBox = findBox(buffer, "meta", 0);
    const iprpBox = metaBox && findBox(buffer, "iprp", metaBox.offset + 12);
    const ipcoBox = iprpBox && findBox(buffer, "ipco", iprpBox.offset + 8);
    const ispeBox = ipcoBox && findBox(buffer, "ispe", ipcoBox.offset + 8);
    if (ispeBox) {
      return {
        height: readUInt32BE(buffer, ispeBox.offset + 16),
        width: readUInt32BE(buffer, ispeBox.offset + 12),
        type: detectBrands(buffer, 8, metaBox.offset)
      };
    }
    throw new TypeError("Invalid HEIF, no size found");
  }
};

const SIZE_HEADER = 4 + 4;
const FILE_LENGTH_OFFSET = 4;
const ENTRY_LENGTH_OFFSET = 4;
const ICON_TYPE_SIZE = {
  ICON: 32,
  "ICN#": 32,
  // m => 16 x 16
  "icm#": 16,
  icm4: 16,
  icm8: 16,
  // s => 16 x 16
  "ics#": 16,
  ics4: 16,
  ics8: 16,
  is32: 16,
  s8mk: 16,
  icp4: 16,
  // l => 32 x 32
  icl4: 32,
  icl8: 32,
  il32: 32,
  l8mk: 32,
  icp5: 32,
  ic11: 32,
  // h => 48 x 48
  ich4: 48,
  ich8: 48,
  ih32: 48,
  h8mk: 48,
  // . => 64 x 64
  icp6: 64,
  ic12: 32,
  // t => 128 x 128
  it32: 128,
  t8mk: 128,
  ic07: 128,
  // . => 256 x 256
  ic08: 256,
  ic13: 256,
  // . => 512 x 512
  ic09: 512,
  ic14: 512,
  // . => 1024 x 1024
  ic10: 1024
};
function readImageHeader(input, imageOffset) {
  const imageLengthOffset = imageOffset + ENTRY_LENGTH_OFFSET;
  return [
    toUTF8String(input, imageOffset, imageLengthOffset),
    readUInt32BE(input, imageLengthOffset)
  ];
}
function getImageSize(type) {
  const size = ICON_TYPE_SIZE[type];
  return { width: size, height: size, type };
}
const ICNS = {
  validate: (input) => toUTF8String(input, 0, 4) === "icns",
  calculate(input) {
    const inputLength = input.length;
    const fileLength = readUInt32BE(input, FILE_LENGTH_OFFSET);
    let imageOffset = SIZE_HEADER;
    let imageHeader = readImageHeader(input, imageOffset);
    let imageSize = getImageSize(imageHeader[0]);
    imageOffset += imageHeader[1];
    if (imageOffset === fileLength)
      return imageSize;
    const result = {
      height: imageSize.height,
      images: [imageSize],
      width: imageSize.width
    };
    while (imageOffset < fileLength && imageOffset < inputLength) {
      imageHeader = readImageHeader(input, imageOffset);
      imageSize = getImageSize(imageHeader[0]);
      imageOffset += imageHeader[1];
      result.images.push(imageSize);
    }
    return result;
  }
};

const J2C = {
  // TODO: this doesn't seem right. SIZ marker doesn't have to be right after the SOC
  validate: (input) => toHexString(input, 0, 4) === "ff4fff51",
  calculate: (input) => ({
    height: readUInt32BE(input, 12),
    width: readUInt32BE(input, 8)
  })
};

const JP2 = {
  validate(input) {
    if (readUInt32BE(input, 4) !== 1783636e3 || readUInt32BE(input, 0) < 1)
      return false;
    const ftypBox = findBox(input, "ftyp", 0);
    if (!ftypBox)
      return false;
    return readUInt32BE(input, ftypBox.offset + 4) === 1718909296;
  },
  calculate(input) {
    const jp2hBox = findBox(input, "jp2h", 0);
    const ihdrBox = jp2hBox && findBox(input, "ihdr", jp2hBox.offset + 8);
    if (ihdrBox) {
      return {
        height: readUInt32BE(input, ihdrBox.offset + 8),
        width: readUInt32BE(input, ihdrBox.offset + 12)
      };
    }
    throw new TypeError("Unsupported JPEG 2000 format");
  }
};

const EXIF_MARKER = "45786966";
const APP1_DATA_SIZE_BYTES = 2;
const EXIF_HEADER_BYTES = 6;
const TIFF_BYTE_ALIGN_BYTES = 2;
const BIG_ENDIAN_BYTE_ALIGN = "4d4d";
const LITTLE_ENDIAN_BYTE_ALIGN = "4949";
const IDF_ENTRY_BYTES = 12;
const NUM_DIRECTORY_ENTRIES_BYTES = 2;
function isEXIF(input) {
  return toHexString(input, 2, 6) === EXIF_MARKER;
}
function extractSize(input, index) {
  return {
    height: readUInt16BE(input, index),
    width: readUInt16BE(input, index + 2)
  };
}
function extractOrientation(exifBlock, isBigEndian) {
  const idfOffset = 8;
  const offset = EXIF_HEADER_BYTES + idfOffset;
  const idfDirectoryEntries = readUInt(exifBlock, 16, offset, isBigEndian);
  for (let directoryEntryNumber = 0; directoryEntryNumber < idfDirectoryEntries; directoryEntryNumber++) {
    const start = offset + NUM_DIRECTORY_ENTRIES_BYTES + directoryEntryNumber * IDF_ENTRY_BYTES;
    const end = start + IDF_ENTRY_BYTES;
    if (start > exifBlock.length) {
      return;
    }
    const block = exifBlock.slice(start, end);
    const tagNumber = readUInt(block, 16, 0, isBigEndian);
    if (tagNumber === 274) {
      const dataFormat = readUInt(block, 16, 2, isBigEndian);
      if (dataFormat !== 3) {
        return;
      }
      const numberOfComponents = readUInt(block, 32, 4, isBigEndian);
      if (numberOfComponents !== 1) {
        return;
      }
      return readUInt(block, 16, 8, isBigEndian);
    }
  }
}
function validateExifBlock(input, index) {
  const exifBlock = input.slice(APP1_DATA_SIZE_BYTES, index);
  const byteAlign = toHexString(
    exifBlock,
    EXIF_HEADER_BYTES,
    EXIF_HEADER_BYTES + TIFF_BYTE_ALIGN_BYTES
  );
  const isBigEndian = byteAlign === BIG_ENDIAN_BYTE_ALIGN;
  const isLittleEndian = byteAlign === LITTLE_ENDIAN_BYTE_ALIGN;
  if (isBigEndian || isLittleEndian) {
    return extractOrientation(exifBlock, isBigEndian);
  }
}
function validateInput(input, index) {
  if (index > input.length) {
    throw new TypeError("Corrupt JPG, exceeded buffer limits");
  }
}
const JPG = {
  validate: (input) => toHexString(input, 0, 2) === "ffd8",
  calculate(input) {
    input = input.slice(4);
    let orientation;
    let next;
    while (input.length) {
      const i = readUInt16BE(input, 0);
      if (input[i] !== 255) {
        input = input.slice(1);
        continue;
      }
      if (isEXIF(input)) {
        orientation = validateExifBlock(input, i);
      }
      validateInput(input, i);
      next = input[i + 1];
      if (next === 192 || next === 193 || next === 194) {
        const size = extractSize(input, i + 5);
        if (!orientation) {
          return size;
        }
        return {
          height: size.height,
          orientation,
          width: size.width
        };
      }
      input = input.slice(i + 2);
    }
    throw new TypeError("Invalid JPG, no size found");
  }
};

const KTX = {
  validate: (input) => {
    const signature = toUTF8String(input, 1, 7);
    return ["KTX 11", "KTX 20"].includes(signature);
  },
  calculate: (input) => {
    const type = input[5] === 49 ? "ktx" : "ktx2";
    const offset = type === "ktx" ? 36 : 20;
    return {
      height: readUInt32LE(input, offset + 4),
      width: readUInt32LE(input, offset),
      type
    };
  }
};

const pngSignature = "PNG\r\n\n";
const pngImageHeaderChunkName = "IHDR";
const pngFriedChunkName = "CgBI";
const PNG = {
  validate(input) {
    if (pngSignature === toUTF8String(input, 1, 8)) {
      let chunkName = toUTF8String(input, 12, 16);
      if (chunkName === pngFriedChunkName) {
        chunkName = toUTF8String(input, 28, 32);
      }
      if (chunkName !== pngImageHeaderChunkName) {
        throw new TypeError("Invalid PNG");
      }
      return true;
    }
    return false;
  },
  calculate(input) {
    if (toUTF8String(input, 12, 16) === pngFriedChunkName) {
      return {
        height: readUInt32BE(input, 36),
        width: readUInt32BE(input, 32)
      };
    }
    return {
      height: readUInt32BE(input, 20),
      width: readUInt32BE(input, 16)
    };
  }
};

const PNMTypes = {
  P1: "pbm/ascii",
  P2: "pgm/ascii",
  P3: "ppm/ascii",
  P4: "pbm",
  P5: "pgm",
  P6: "ppm",
  P7: "pam",
  PF: "pfm"
};
const handlers = {
  default: (lines) => {
    let dimensions = [];
    while (lines.length > 0) {
      const line = lines.shift();
      if (line[0] === "#") {
        continue;
      }
      dimensions = line.split(" ");
      break;
    }
    if (dimensions.length === 2) {
      return {
        height: parseInt(dimensions[1], 10),
        width: parseInt(dimensions[0], 10)
      };
    } else {
      throw new TypeError("Invalid PNM");
    }
  },
  pam: (lines) => {
    const size = {};
    while (lines.length > 0) {
      const line = lines.shift();
      if (line.length > 16 || line.charCodeAt(0) > 128) {
        continue;
      }
      const [key, value] = line.split(" ");
      if (key && value) {
        size[key.toLowerCase()] = parseInt(value, 10);
      }
      if (size.height && size.width) {
        break;
      }
    }
    if (size.height && size.width) {
      return {
        height: size.height,
        width: size.width
      };
    } else {
      throw new TypeError("Invalid PAM");
    }
  }
};
const PNM = {
  validate: (input) => toUTF8String(input, 0, 2) in PNMTypes,
  calculate(input) {
    const signature = toUTF8String(input, 0, 2);
    const type = PNMTypes[signature];
    const lines = toUTF8String(input, 3).split(/[\r\n]+/);
    const handler = handlers[type] || handlers.default;
    return handler(lines);
  }
};

const PSD = {
  validate: (input) => toUTF8String(input, 0, 4) === "8BPS",
  calculate: (input) => ({
    height: readUInt32BE(input, 14),
    width: readUInt32BE(input, 18)
  })
};

const svgReg = /<svg\s([^>"']|"[^"]*"|'[^']*')*>/;
const extractorRegExps = {
  height: /\sheight=(['"])([^%]+?)\1/,
  root: svgReg,
  viewbox: /\sviewBox=(['"])(.+?)\1/i,
  width: /\swidth=(['"])([^%]+?)\1/
};
const INCH_CM = 2.54;
const units = {
  in: 96,
  cm: 96 / INCH_CM,
  em: 16,
  ex: 8,
  m: 96 / INCH_CM * 100,
  mm: 96 / INCH_CM / 10,
  pc: 96 / 72 / 12,
  pt: 96 / 72,
  px: 1
};
const unitsReg = new RegExp(
  // eslint-disable-next-line regexp/prefer-d
  `^([0-9.]+(?:e\\d+)?)(${Object.keys(units).join("|")})?$`
);
function parseLength(len) {
  const m = unitsReg.exec(len);
  if (!m) {
    return void 0;
  }
  return Math.round(Number(m[1]) * (units[m[2]] || 1));
}
function parseViewbox(viewbox) {
  const bounds = viewbox.split(" ");
  return {
    height: parseLength(bounds[3]),
    width: parseLength(bounds[2])
  };
}
function parseAttributes(root) {
  const width = root.match(extractorRegExps.width);
  const height = root.match(extractorRegExps.height);
  const viewbox = root.match(extractorRegExps.viewbox);
  return {
    height: height && parseLength(height[2]),
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    viewbox: viewbox && parseViewbox(viewbox[2]),
    width: width && parseLength(width[2])
  };
}
function calculateByDimensions(attrs) {
  return {
    height: attrs.height,
    width: attrs.width
  };
}
function calculateByViewbox(attrs, viewbox) {
  const ratio = viewbox.width / viewbox.height;
  if (attrs.width) {
    return {
      height: Math.floor(attrs.width / ratio),
      width: attrs.width
    };
  }
  if (attrs.height) {
    return {
      height: attrs.height,
      width: Math.floor(attrs.height * ratio)
    };
  }
  return {
    height: viewbox.height,
    width: viewbox.width
  };
}
const SVG = {
  // Scan only the first kilo-byte to speed up the check on larger files
  validate: (input) => svgReg.test(toUTF8String(input, 0, 1e3)),
  calculate(input) {
    const root = toUTF8String(input).match(extractorRegExps.root);
    if (root) {
      const attrs = parseAttributes(root[0]);
      if (attrs.width && attrs.height) {
        return calculateByDimensions(attrs);
      }
      if (attrs.viewbox) {
        return calculateByViewbox(attrs, attrs.viewbox);
      }
    }
    throw new TypeError("Invalid SVG");
  }
};

const TGA = {
  validate(input) {
    return readUInt16LE(input, 0) === 0 && readUInt16LE(input, 4) === 0;
  },
  calculate(input) {
    return {
      height: readUInt16LE(input, 14),
      width: readUInt16LE(input, 12)
    };
  }
};

function readIFD(input, isBigEndian) {
  const ifdOffset = readUInt(input, 32, 4, isBigEndian);
  return input.slice(ifdOffset + 2);
}
function readValue(input, isBigEndian) {
  const low = readUInt(input, 16, 8, isBigEndian);
  const high = readUInt(input, 16, 10, isBigEndian);
  return (high << 16) + low;
}
function nextTag(input) {
  if (input.length > 24) {
    return input.slice(12);
  }
}
function extractTags(input, isBigEndian) {
  const tags = {};
  let temp = input;
  while (temp && temp.length) {
    const code = readUInt(temp, 16, 0, isBigEndian);
    const type = readUInt(temp, 16, 2, isBigEndian);
    const length = readUInt(temp, 32, 4, isBigEndian);
    if (code === 0) {
      break;
    } else {
      if (length === 1 && (type === 3 || type === 4)) {
        tags[code] = readValue(temp, isBigEndian);
      }
      temp = nextTag(temp);
    }
  }
  return tags;
}
function determineEndianness(input) {
  const signature = toUTF8String(input, 0, 2);
  if ("II" === signature) {
    return "LE";
  } else if ("MM" === signature) {
    return "BE";
  }
}
const signatures = [
  // '492049', // currently not supported
  "49492a00",
  // Little endian
  "4d4d002a"
  // Big Endian
  // '4d4d002a', // BigTIFF > 4GB. currently not supported
];
const TIFF = {
  validate: (input) => signatures.includes(toHexString(input, 0, 4)),
  calculate(input) {
    const isBigEndian = determineEndianness(input) === "BE";
    const ifdBuffer = readIFD(input, isBigEndian);
    const tags = extractTags(ifdBuffer, isBigEndian);
    const width = tags[256];
    const height = tags[257];
    if (!width || !height) {
      throw new TypeError("Invalid Tiff. Missing tags");
    }
    return { height, width };
  }
};

function calculateExtended(input) {
  return {
    height: 1 + readUInt24LE(input, 7),
    width: 1 + readUInt24LE(input, 4)
  };
}
function calculateLossless(input) {
  return {
    height: 1 + ((input[4] & 15) << 10 | input[3] << 2 | (input[2] & 192) >> 6),
    width: 1 + ((input[2] & 63) << 8 | input[1])
  };
}
function calculateLossy(input) {
  return {
    height: readInt16LE(input, 8) & 16383,
    width: readInt16LE(input, 6) & 16383
  };
}
const WEBP = {
  validate(input) {
    const riffHeader = "RIFF" === toUTF8String(input, 0, 4);
    const webpHeader = "WEBP" === toUTF8String(input, 8, 12);
    const vp8Header = "VP8" === toUTF8String(input, 12, 15);
    return riffHeader && webpHeader && vp8Header;
  },
  calculate(input) {
    const chunkHeader = toUTF8String(input, 12, 16);
    input = input.slice(20, 30);
    if (chunkHeader === "VP8X") {
      const extendedHeader = input[0];
      const validStart = (extendedHeader & 192) === 0;
      const validEnd = (extendedHeader & 1) === 0;
      if (validStart && validEnd) {
        return calculateExtended(input);
      } else {
        throw new TypeError("Invalid WebP");
      }
    }
    if (chunkHeader === "VP8 " && input[0] !== 47) {
      return calculateLossy(input);
    }
    const signature = toHexString(input, 3, 6);
    if (chunkHeader === "VP8L" && signature !== "9d012a") {
      return calculateLossless(input);
    }
    throw new TypeError("Invalid WebP");
  }
};

const typeHandlers = /* @__PURE__ */ new Map([
  ["bmp", BMP],
  ["cur", CUR],
  ["dds", DDS],
  ["gif", GIF],
  ["heif", HEIF],
  ["icns", ICNS],
  ["ico", ICO],
  ["j2c", J2C],
  ["jp2", JP2],
  ["jpg", JPG],
  ["ktx", KTX],
  ["png", PNG],
  ["pnm", PNM],
  ["psd", PSD],
  ["svg", SVG],
  ["tga", TGA],
  ["tiff", TIFF],
  ["webp", WEBP]
]);
const types = Array.from(typeHandlers.keys());

const firstBytes = /* @__PURE__ */ new Map([
  [56, "psd"],
  [66, "bmp"],
  [68, "dds"],
  [71, "gif"],
  [73, "tiff"],
  [77, "tiff"],
  [82, "webp"],
  [105, "icns"],
  [137, "png"],
  [255, "jpg"]
]);
function detector(input) {
  const byte = input[0];
  const type = firstBytes.get(byte);
  if (type && typeHandlers.get(type).validate(input)) {
    return type;
  }
  return types.find((fileType) => typeHandlers.get(fileType).validate(input));
}

const globalOptions = {
  disabledTypes: []
};
function lookup(input) {
  const type = detector(input);
  if (typeof type !== "undefined") {
    if (globalOptions.disabledTypes.indexOf(type) > -1) {
      throw new TypeError("disabled file type: " + type);
    }
    const size = typeHandlers.get(type).calculate(input);
    if (size !== void 0) {
      size.type = size.type ?? type;
      return size;
    }
  }
  throw new TypeError("unsupported file type: " + type);
}

async function probe(url) {
  const response = await fetch(url);
  if (!response.body || !response.ok) {
    throw new Error("Failed to fetch image");
  }
  const reader = response.body.getReader();
  let done, value;
  let accumulatedChunks = new Uint8Array();
  while (!done) {
    const readResult = await reader.read();
    done = readResult.done;
    if (done)
      break;
    if (readResult.value) {
      value = readResult.value;
      let tmp = new Uint8Array(accumulatedChunks.length + value.length);
      tmp.set(accumulatedChunks, 0);
      tmp.set(value, accumulatedChunks.length);
      accumulatedChunks = tmp;
      try {
        const dimensions = lookup(accumulatedChunks);
        if (dimensions) {
          await reader.cancel();
          return dimensions;
        }
      } catch (error) {
      }
    }
  }
  throw new Error("Failed to parse the size");
}

async function getConfiguredImageService() {
  if (!globalThis?.astroAsset?.imageService) {
    const { default: service } = await import(
      // @ts-expect-error
      '../astro/assets-service_tYo8wRsC.mjs'
    ).then(n => n.s).catch((e) => {
      const error = new AstroError(InvalidImageService);
      error.cause = e;
      throw error;
    });
    if (!globalThis.astroAsset)
      globalThis.astroAsset = {};
    globalThis.astroAsset.imageService = service;
    return service;
  }
  return globalThis.astroAsset.imageService;
}
async function getImage$1(options, imageConfig) {
  if (!options || typeof options !== "object") {
    throw new AstroError({
      ...ExpectedImageOptions,
      message: ExpectedImageOptions.message(JSON.stringify(options))
    });
  }
  if (typeof options.src === "undefined") {
    throw new AstroError({
      ...ExpectedImage,
      message: ExpectedImage.message(
        options.src,
        "undefined",
        JSON.stringify(options)
      )
    });
  }
  const service = await getConfiguredImageService();
  const resolvedOptions = {
    ...options,
    src: typeof options.src === "object" && "then" in options.src ? (await options.src).default ?? await options.src : options.src
  };
  if (options.inferSize && isRemoteImage(resolvedOptions.src)) {
    try {
      const result = await probe(resolvedOptions.src);
      resolvedOptions.width ??= result.width;
      resolvedOptions.height ??= result.height;
      delete resolvedOptions.inferSize;
    } catch {
      throw new AstroError({
        ...FailedToFetchRemoteImageDimensions,
        message: FailedToFetchRemoteImageDimensions.message(resolvedOptions.src)
      });
    }
  }
  const originalPath = isESMImportedImage(resolvedOptions.src) ? resolvedOptions.src.fsPath : resolvedOptions.src;
  const clonedSrc = isESMImportedImage(resolvedOptions.src) ? (
    // @ts-expect-error - clone is a private, hidden prop
    resolvedOptions.src.clone ?? resolvedOptions.src
  ) : resolvedOptions.src;
  resolvedOptions.src = clonedSrc;
  const validatedOptions = service.validateOptions ? await service.validateOptions(resolvedOptions, imageConfig) : resolvedOptions;
  const srcSetTransforms = service.getSrcSet ? await service.getSrcSet(validatedOptions, imageConfig) : [];
  let imageURL = await service.getURL(validatedOptions, imageConfig);
  let srcSets = await Promise.all(
    srcSetTransforms.map(async (srcSet) => ({
      transform: srcSet.transform,
      url: await service.getURL(srcSet.transform, imageConfig),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }))
  );
  if (isLocalService(service) && globalThis.astroAsset.addStaticImage && !(isRemoteImage(validatedOptions.src) && imageURL === validatedOptions.src)) {
    const propsToHash = service.propertiesToHash ?? DEFAULT_HASH_PROPS;
    imageURL = globalThis.astroAsset.addStaticImage(validatedOptions, propsToHash, originalPath);
    srcSets = srcSetTransforms.map((srcSet) => ({
      transform: srcSet.transform,
      url: globalThis.astroAsset.addStaticImage(srcSet.transform, propsToHash, originalPath),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }));
  }
  return {
    rawOptions: resolvedOptions,
    options: validatedOptions,
    src: imageURL,
    srcSet: {
      values: srcSets,
      attribute: srcSets.map((srcSet) => `${srcSet.url} ${srcSet.descriptor}`).join(", ")
    },
    attributes: service.getHTMLAttributes !== void 0 ? await service.getHTMLAttributes(validatedOptions, imageConfig) : {}
  };
}

const $$Astro$d = createAstro("https://nickbravo.dev");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "/Users/nb258622/dev/Github/nickbravodev-v2/node_modules/astro/components/Image.astro", void 0);

const $$Astro$c = createAstro("https://nickbravo.dev");
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
    resultFallbackFormat = props.src.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionalAttributes = {};
  if (props.sizes) {
    sourceAdditionalAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}${spreadAttributes(sourceAdditionalAttributes)}>`;
  })} <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}> </picture>`;
}, "/Users/nb258622/dev/Github/nickbravodev-v2/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					new URL("file:///Users/nb258622/dev/Github/nickbravodev-v2/dist/");
					const getImage = async (options) => await getImage$1(options, imageConfig);

const $$Astro$b = createAstro("https://nickbravo.dev");
const $$MainHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$MainHead;
  const { title, description, og_image, og_url } = Astro2.props;
  return renderTemplate`<head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><link rel="canonical"${addAttribute(og_url, "href")}><link rel="sitemap" href="/sitemap-index.xml"><meta name="description"${addAttribute(description, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta name="color-scheme" content="dark light"><meta property="og:type" content="website"><meta property="og:image"${addAttribute(og_image, "content")}><meta property="og:url"${addAttribute(og_url, "content")}>${renderHead()}</head>`;
}, "/Users/nb258622/dev/Github/nickbravodev-v2/src/layouts/MainHead.astro", void 0);

const icons = {"local":{"prefix":"local","lastModified":1709186771,"icons":{"close-button":{"body":"<path fill=\"currentColor\" d=\"m12 13.4-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9 4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275z\"/>"},"dark-mode-toggle":{"body":"<path fill=\"currentColor\" d=\"M9.5 4c4.41 0 8 3.59 8 8s-3.59 8-8 8c-.34 0-.68-.02-1.01-.07 1.91-2.16 3.01-4.98 3.01-7.93s-1.1-5.77-3.01-7.93C8.82 4.02 9.16 4 9.5 4m0-2c-1.82 0-3.53.5-5 1.35 2.99 1.73 5 4.95 5 8.65s-2.01 6.92-5 8.65c1.47.85 3.18 1.35 5 1.35 5.52 0 10-4.48 10-10S15.02 2 9.5 2z\"/>"},"download":{"body":"<path fill=\"none\" stroke=\"#dde0bd\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3\" d=\"M28.5 19.5v6a3 3 0 0 1-3 3h-21a3 3 0 0 1-3-3v-6m6-7.5 7.5 7.5 7.5-7.5M15 19.5v-18\"/>","width":30,"height":30},"light-mode-toggle":{"body":"<path fill=\"currentColor\" d=\"M12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z\"/>"},"nav-toggle":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"1.5\" d=\"M4 7h3m13 0h-9m9 10h-3M4 17h9m-9-5h16\"/>"},"new-window":{"body":"<path fill=\"currentColor\" d=\"M24 24H3V3h9.375V0H3a3.008 3.008 0 0 0-3 3v21a3.008 3.008 0 0 0 3 3h21a3.008 3.008 0 0 0 3-3v-9.375h-3ZM15.75 0v3h6.15L6.75 18.15l2.1 2.1L24 5.1v6.15h3V0Z\"/>","width":27,"height":27},"nickbravodev":{"body":"<defs><clipPath id=\"a\"><path fill=\"none\" d=\"M0 0h344.484v387.233H0z\"/></clipPath></defs><g clip-path=\"url(#a)\"><path fill=\"#edefce\" d=\"M344.484 18.356A18.41 18.41 0 0 0 326.128 0H18.356A18.41 18.41 0 0 0 0 18.356v253.383c0 10.1 7.095 22.586 15.768 27.754l140.706 83.863c8.672 5.169 22.863 5.169 31.536 0l140.706-83.863c8.672-5.168 15.768-17.658 15.768-27.754Z\"/><path fill=\"#272b2a\" d=\"M173.709 71.739a4.8 4.8 0 0 1 2.6-2.6l4.208-1.469c1.059-.37 1.06-.975 0-1.345l-4.21-1.473a4.8 4.8 0 0 1-2.6-2.6l-1.472-4.214c-.37-1.059-.976-1.059-1.347 0l-1.473 4.21a4.814 4.814 0 0 1-2.6 2.6l-4.211 1.475c-1.058.371-1.058.976 0 1.346l4.213 1.47a4.8 4.8 0 0 1 2.6 2.6l1.471 4.211c.37 1.059.976 1.059 1.346 0Zm27.863-9.339a4.806 4.806 0 0 1 2.6-2.6l4.209-1.471c1.059-.37 1.059-.976 0-1.347l-4.209-1.472a4.8 4.8 0 0 1-2.6-2.6L200.1 48.7c-.37-1.059-.976-1.059-1.346 0l-1.474 4.21a4.809 4.809 0 0 1-2.6 2.6l-4.21 1.472c-1.059.371-1.059.977 0 1.347l4.213 1.472a4.8 4.8 0 0 1 2.6 2.6l1.471 4.209c.371 1.059.976 1.059 1.346 0Zm-54.935 18.681a4.8 4.8 0 0 1 2.6-2.6l4.209-1.471c1.059-.37 1.059-.976 0-1.346l-4.209-1.47a4.8 4.8 0 0 1-2.6-2.6l-1.47-4.21c-.37-1.059-.976-1.059-1.346 0l-1.474 4.21a4.807 4.807 0 0 1-2.6 2.6l-4.209 1.472c-1.059.37-1.059.976 0 1.346l4.213 1.473a4.806 4.806 0 0 1 2.6 2.6l1.471 4.207c.371 1.059.976 1.059 1.346 0Z\"/><path fill=\"#272b2a\" d=\"M87.153 55.8c-.456-1.025-.83-.945-.83.176v16.316a10.57 10.57 0 0 0 .892 3.874l9.759 20.059c.49 1.008.334 1.105-.348.214l-36.814-48.1c-.681-.891-1.126-.709-.988.4l2.166 17.438a8.769 8.769 0 0 0 1.5 3.633l35.6 45.711c.69.885.625.94-.143.122L49.778 64.355c-.768-.817-1.183-.594-.923.5L52.926 81.9a8.634 8.634 0 0 0 1.907 3.435l36.182 36.618c.789.8.73.862-.131.143L43.519 82.523c-.861-.719-1.177-.476-.7.54l7.21 15.437a9.254 9.254 0 0 0 2.521 3.036L87.5 126.6c.912.653.856.742-.124.2l-44.58-24.83c-.98-.546-1.328-.194-.774.781l6.454 11.35a7.633 7.633 0 0 0 2.849 2.65l33.484 15.967c1.012.483.968.592-.1.243L40.6 118.5c-1.066-.35-1.357.075-.647.943l8.238 10.068a7.1 7.1 0 0 0 3.275 2.055l31.944 7.673c1.09.262 1.065.5-.056.52l-32.619.7c-1.121.024-1.285.568-.365 1.209l9.04 6.291a7.4 7.4 0 0 0 3.713 1.13l23.365-.4c1.122-.019 1.131.092.02.246l-29.832 4.143c-1.111.155-1.233.752-.27 1.328l10.927 6.532a6.041 6.041 0 0 0 3.747.629l20-4.184c1.1-.23 1.129-.117.068.249l-25.155 8.7c-1.06.366-1.111 1.084-.112 1.6l10.167 5.2a5.758 5.758 0 0 0 3.763.32l16.652-5.211c1.071-.335 1.115-.221.1.254L76.419 177.9c-1.017.475-1.049 1.314-.072 1.865l8.679 4.9a4.78 4.78 0 0 0 3.665.231l14.264-5.827c1.038-.424 1.082-.331.1.206L84.517 189.39c-.985.537-.919 1.264.147 1.614l8.044 2.646a6.31 6.31 0 0 0 3.815-.16l12.868-5.464c1.033-.438 1.087-.331.12.239L92.8 198.114c-.967.569-.869 1.264.218 1.543l7.65 1.965a5.794 5.794 0 0 0 3.745-.507l10.421-5.972c.973-.558 1.031-.47.128.2l-15.223 11.22c-.9.666-.758 1.46.322 1.764l7.209 2.03a4.758 4.758 0 0 0 3.61-.649l10.034-7.321c.906-.661.982-.57.169.2l-12.727 12.091c-.813.773-.581 1.594.517 1.824l5.733 1.2a5.075 5.075 0 0 0 3.616-.82l9.466-7.246c.89-.682.992-.57.224.248l-11.172 11.928c-.767.819-.481 1.568.637 1.666l4.878.428a4.707 4.707 0 0 0 3.415-1.321l8.524-9.235c.761-.824.858-.746.217.175l-9.586 13.748c-.642.92-.249 1.691.873 1.713l3.919.076a4.047 4.047 0 0 0 3.135-1.68l6.9-10.831c.6-.946.72-.883.259.14l-6.795 15.1c-.46 1.023.032 1.564 1.094 1.2l3.511-1.2a6.574 6.574 0 0 0 2.995-2.4l6.024-9.85c.586-.957.7-.9.257.133l-5.755 13.349c-.444 1.03.074 1.616 1.151 1.3l4.709-1.371a5.5 5.5 0 0 0 2.9-2.378l3.6-6.891c.52-.994 1.36-.989 1.867.012l5.054 9.973a2.976 2.976 0 0 1-.523 3.262 85.844 85.844 0 0 1-19.245 13.31 271.981 271.981 0 0 1-26.935 11.539c-1.056.381-1.056 1.006 0 1.388l10.432 3.784a5.4 5.4 0 0 0 3.736-.228l28.2-14.306c1-.507 1.069-.393.152.253l-32.892 23.211c-.916.647-.75 1.233.369 1.3l11.141.69a5.634 5.634 0 0 0 3.558-1.23l20.009-17.83c.837-.746.949-.64.248.236l-21.916 27.395c-.7.876-.363 1.48.75 1.342l8.653-1.07a4.768 4.768 0 0 0 3.08-1.995l13.259-21.915c.581-.959.679-.908.218.115l-13.377 29.684c-.461 1.023.034 1.576 1.1 1.229l8.664-2.816a4.4 4.4 0 0 0 2.533-2.582l6.97-22.916c.326-1.073.463-1.043.305.068l-3.5 24.507a5.283 5.283 0 0 0 1.011 3.591l4.143 5.011a1.627 1.627 0 0 0 2.6 0l4.143-5.011a5.284 5.284 0 0 0 1.012-3.591l-3.5-24.507c-.159-1.111-.021-1.141.305-.068l6.966 22.916a4.4 4.4 0 0 0 2.533 2.581l8.67 2.817c1.067.347 1.563-.206 1.1-1.229l-13.382-29.684c-.461-1.023-.363-1.074.218-.115l13.259 21.915a4.768 4.768 0 0 0 3.08 1.995l8.653 1.07c1.113.138 1.451-.466.75-1.342l-21.912-27.395c-.7-.876-.589-.982.249-.236l20 17.829a5.631 5.631 0 0 0 3.559 1.231l11.14-.69c1.12-.069 1.286-.655.369-1.3l-32.894-23.211c-.917-.646-.848-.76.152-.253l28.2 14.306a5.4 5.4 0 0 0 3.736.228l10.44-3.784c1.054-.383 1.054-1.007 0-1.388a271.727 271.727 0 0 1-26.936-11.539 85.9 85.9 0 0 1-19.247-13.311 2.974 2.974 0 0 1-.533-3.248l5.056-9.973c.508-1 1.348-1.006 1.867-.011l3.6 6.89a5.5 5.5 0 0 0 2.9 2.378l4.711 1.371c1.077.313 1.6-.273 1.151-1.3l-5.755-13.349c-.444-1.03-.328-1.09.257-.133l6.024 9.85a6.58 6.58 0 0 0 2.994 2.4l3.51 1.194c1.062.362 1.554-.179 1.094-1.2l-6.793-15.1c-.46-1.023-.344-1.086.259-.14l6.9 10.831a4.047 4.047 0 0 0 3.135 1.68l3.92-.076c1.121-.022 1.514-.793.872-1.713l-9.585-13.748c-.642-.921-.544-1 .217-.175l8.524 9.235a4.7 4.7 0 0 0 3.415 1.321l4.875-.428c1.118-.1 1.4-.848.638-1.666l-11.167-11.92c-.767-.819-.666-.931.225-.249l9.462 7.245a5.067 5.067 0 0 0 3.615.821l5.729-1.2c1.1-.23 1.331-1.051.518-1.824l-12.727-12.102c-.813-.773-.737-.864.17-.2l10.037 7.321a4.76 4.76 0 0 0 3.611.649l7.209-2.03c1.079-.3 1.224-1.1.321-1.764l-15.225-11.227c-.9-.666-.846-.754.128-.2l10.42 5.972a5.8 5.8 0 0 0 3.745.507l7.655-1.965c1.086-.279 1.184-.973.218-1.543l-16.719-9.849c-.967-.57-.913-.677.12-.239l12.873 5.468a6.31 6.31 0 0 0 3.815.16l8.042-2.65c1.065-.35 1.132-1.077.147-1.614l-18.532-10.12c-.985-.537-.941-.63.1-.206l14.257 5.827a4.778 4.778 0 0 0 3.664-.231l8.68-4.9c.977-.551.944-1.39-.072-1.865l-20.142-9.409c-1.016-.475-.972-.589.1-.254l16.65 5.211a5.765 5.765 0 0 0 3.763-.319l10.169-5.2c1-.511.949-1.229-.111-1.6l-25.155-8.7c-1.06-.366-1.029-.479.069-.249l20 4.184a6.041 6.041 0 0 0 3.747-.629l10.928-6.532c.963-.576.842-1.173-.269-1.328l-29.833-4.143c-1.111-.154-1.1-.265.019-.246l23.367.4a7.41 7.41 0 0 0 3.713-1.13l9.039-6.291c.921-.641.757-1.185-.365-1.209l-32.619-.7c-1.122-.024-1.147-.258-.056-.52l31.948-7.673a7.092 7.092 0 0 0 3.274-2.055l8.238-10.068c.71-.868.42-1.293-.646-.943l-44.114 14.464c-1.066.349-1.11.24-.1-.243l33.485-15.958a7.62 7.62 0 0 0 2.849-2.651l6.451-11.349c.554-.975.206-1.327-.775-.781l-44.581 24.83c-.98.546-1.036.457-.125-.2l34.951-25.067a9.254 9.254 0 0 0 2.521-3.036l7.209-15.434c.474-1.016.159-1.259-.7-.54L253.037 122.1c-.861.719-.92.655-.132-.143l36.18-36.618a8.634 8.634 0 0 0 1.907-3.435l4.073-17.047c.261-1.091-.155-1.314-.923-.5l-48.174 51.288c-.768.818-.832.763-.143-.122l35.6-45.711a8.754 8.754 0 0 0 1.5-3.633l2.167-17.438c.138-1.113-.307-1.295-.989-.4l-36.814 48.11c-.682.891-.838.795-.348-.214l9.759-20.071a10.549 10.549 0 0 0 .892-3.874V55.975c0-1.121-.373-1.2-.83-.176l-28.491 63.967a13.937 13.937 0 0 0-1.2 6.785c1.243 15.336-8.788 35.455-16.129 42.576-13.362 12.961-24.568 14-24.568 14a2.339 2.339 0 0 1-2.442-1.81l-2.627-12.784a11.009 11.009 0 0 0-1.626-3.636l-1.177-1.586a10.739 10.739 0 0 1-1.608-3.639 100.431 100.431 0 0 1-1.486-11.017 42.86 42.86 0 0 0-2.7-10.966c-.416-1.042-1.1-1.042-1.514 0a42.713 42.713 0 0 0-2.694 10.966 100.583 100.583 0 0 1-1.487 11.017 10.741 10.741 0 0 1-1.609 3.639l-1.176 1.586a10.969 10.969 0 0 0-1.626 3.636l-2.628 12.784a2.338 2.338 0 0 1-2.441 1.81s-11.2-1.035-24.567-14c-7.338-7.12-17.374-27.238-16.128-42.574a13.941 13.941 0 0 0-1.2-6.789Z\"/></g>","width":344.484,"height":387.233},"social/github":{"body":"<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z\" clip-rule=\"evenodd\"/>"},"social/instagram":{"body":"<path fill=\"currentColor\" d=\"M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z\"/><circle cx=\"16.806\" cy=\"7.207\" r=\"1.078\" fill=\"currentColor\"/><path fill=\"currentColor\" d=\"M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z\"/>"},"social/linkedin":{"body":"<circle cx=\"4.983\" cy=\"5.009\" r=\"2.188\" fill=\"currentColor\"/><path fill=\"currentColor\" d=\"M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z\"/>"},"social/twitter":{"body":"<path fill=\"currentColor\" d=\"M18.205 2.25h3.308l-7.227 8.26 8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.045 4.126H5.078L17.044 19.77Z\"/>"}},"width":24,"height":24}};

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$a = createAstro("https://nickbravo.dev");
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
    }
  }
  const req = Astro2.request;
  const { name = "", title, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "xlink:href")}></use> ` })}`} </svg>`;
}, "/Users/nb258622/dev/Github/nickbravodev-v2/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Astro$9 = createAstro("https://nickbravo.dev");
const $$Link = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Link;
  const {
    text,
    href,
    target,
    style,
    icon,
    classes,
    ...rest
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li> <a${addAttribute(href, "href")}${addAttribute(target, "target")}${addAttribute([classes, style], "class:list")}${spreadAttributes(rest)}>${icon && icon.side === "left" && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon.name, "height": "24", "width": "24" })}`}<span>${text}</span>${icon && icon.side === "right" && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon.name, "height": "24", "width": "24" })}`} </a> </li>`;
}, "/Users/nb258622/dev/Github/nickbravodev-v2/src/components/Link.astro", void 0);

const navData = [
  {
    name: "About",
    path: "/#about",
  },
  {
    name: "Scope",
    path: "/#scope",
    // icon: {
    //   name: "twitter",
    //   side: "right",
    // },
  },
  {
    name: "Work",
    path: "/#work",
    // icon: {
    //   name: "twitter",
    //   side: "left",
    // },
  },
  {
    name: "Contact",
    path: "/#contact",
  },
  {
    name: "Resume",
    path: "#resume",
    classes: "resume-trigger",
    id: "resume-trigger",
  },
];

const $$Astro$8 = createAstro("https://nickbravo.dev");
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Nav;
  return renderTemplate`${maybeRenderHead()}<header> <!-- Brand logo SVG --> <a class="nav-logo" href="/" aria-label="Nick Bravo Home"> ${renderComponent($$result, "Icon", $$Icon, { "name": "nickbravodev" })} <!-- Brand name --> <span class="brand-text">Nick Bravo</span> </a> <button class="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false"> <span class="sr-only">Menu</span> ${renderComponent($$result, "Icon", $$Icon, { "name": "nav-toggle" })} </button> <nav> <ul id="primary-navigation" data-visible="false" class="primary-navigation"> ${navData.map((item) => renderTemplate`${renderComponent($$result, "Link", $$Link, { "text": item.name, "href": item.path, "target": item.target, "class": item.classes, "aria-label": item.name, "icon": item.icon })}`)} </ul> </nav> </header> `;
}, "/Users/nb258622/dev/Github/nickbravodev-v2/src/components/Nav.astro", void 0);

const socialData = [
  {
    name: "Github",
    path: "https://www.github.com/nickbravodev/",
    target: "_blank",
    icon: "social/github",
  },
  {
    name: "Twitter",
    path: "https://www.twitter.com/nickbravodev/",
    target: "_blank",
    icon: "social/twitter",
  },
  {
    name: "Instagram",
    path: "https://www.instagram.com/nickbravodev/",
    target: "_blank",
    icon: "social/instagram",
  },
  {
    name: "LinkedIn",
    path: "https://www.linkedin.com/in/nickbravodev/",
    target: "_blank",
    icon: "social/linkedin",
  },
];

const $$Astro$7 = createAstro("https://nickbravo.dev");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer> <div class="footer-social"> ${socialData.map((item) => renderTemplate`<a${addAttribute(item.path, "href")}${addAttribute(item.target, "target")}${addAttribute(item.name, "aria-label")}> ${renderComponent($$result, "Icon", $$Icon, { "name": item.icon })} </a>`)} </div> <div class="copyright text-center">
Copyright &copy; <span id="copyright"></span> NickBravo.dev. All rights resrved.
</div> </footer> `;
}, "/Users/nb258622/dev/Github/nickbravodev-v2/src/components/Footer.astro", void 0);

const $$Astro$6 = createAstro("https://nickbravo.dev");
const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ContactForm;
  return renderTemplate`<!-- Contact section -->${maybeRenderHead()}<section id="contact" data-astro-cid-baqc3mtv> <div class="contact-wrapper" data-astro-cid-baqc3mtv> <div data-astro-cid-baqc3mtv> <!-- Contact text --> <h2 data-astro-cid-baqc3mtv>Get in touch.</h2> <div class="hr-div" data-astro-cid-baqc3mtv></div> <p class="subheading" data-astro-cid-baqc3mtv>
I'm ready to join your team! Send me a message if you think we'd be a great fit!
</p> </div> <!-- Contact form --> <div data-astro-cid-baqc3mtv> <form name="contact-form" id="contact-form" action="/success/" method="POST" data-netlify="true" data-netilfy-honeypot="bot-field" data-astro-cid-baqc3mtv> <!-- Robot honeypot. That rhymes! --> <div class="sr-only" data-astro-cid-baqc3mtv> <label data-astro-cid-baqc3mtv>
Robot honeypot: Leave this field empty if you're human
<input name="bot-field" data-astro-cid-baqc3mtv> </label> </div> <!-- Name input --> <div data-astro-cid-baqc3mtv> <label class="form-label sr-only" for="name" data-astro-cid-baqc3mtv>Name</label> <input class="form-control" type="text" id="name" name="name" placeholder="Name" required data-astro-cid-baqc3mtv> </div> <!-- Email input --> <div data-astro-cid-baqc3mtv> <label class="form-label sr-only" for="email" data-astro-cid-baqc3mtv>Email</label> <input class="form-control" type="email" id="email" name="email" placeholder="Email" required data-astro-cid-baqc3mtv> </div> <!-- Message input --> <div data-astro-cid-baqc3mtv> <label class="form-label sr-only" for="description" data-astro-cid-baqc3mtv>Message</label> <textarea class="form-control" rows="3" id="description" name="message" placeholder="Type your message here" required data-astro-cid-baqc3mtv></textarea> </div> <!-- Submit button --> <div data-astro-cid-baqc3mtv> <button class="outline" data-astro-cid-baqc3mtv>Send message</button> </div> </form> </div> </div> </section> `;
}, "/Users/nb258622/dev/Github/nickbravodev-v2/src/components/forms/ContactForm.astro", void 0);

const $$Astro$5 = createAstro("https://nickbravo.dev");
const $$ResumePopout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ResumePopout;
  return renderTemplate`<!-- Off-canvas resume popout -->${maybeRenderHead()}<section class="resume-popout" tabindex="-1" id="resume" data-visible="false" data-astro-cid-iyzdqnlb> <div class="popout-wrapper" data-astro-cid-iyzdqnlb><div class="popout" data-astro-cid-iyzdqnlb> <!-- Resume header --> <div class="popout-header" data-astro-cid-iyzdqnlb> <!-- Brand logo --> <a href="/" class="popoutbar-brand" aria-label="NickBravo.dev Logo" data-astro-cid-iyzdqnlb> ${renderComponent($$result, "Icon", $$Icon, { "name": "nickbravodev", "class": "brand-icon", "data-astro-cid-iyzdqnlb": true })} </a> <!-- Resume header text --> <div class="ms-3 me-auto" data-astro-cid-iyzdqnlb> <h2 class="resume-heading" data-astro-cid-iyzdqnlb>Nick Bravo</h2> <p class="resume-subheading" data-astro-cid-iyzdqnlb>
Designer. Developer. Problem solver.
</p> </div> <!-- Close button --><!-- Close button --> <button type="button" class="btn-close text-reset" aria-label="Close" data-astro-cid-iyzdqnlb> ${renderComponent($$result, "Icon", $$Icon, { "name": "close-button", "data-astro-cid-iyzdqnlb": true })} </button> </div> <!-- Resume body --> <div id="resume-body" class="popout-body" data-astro-cid-iyzdqnlb> <!-- Performance profile --> <div class="profile" data-astro-cid-iyzdqnlb> <h3 data-astro-cid-iyzdqnlb>PERFORMANCE PROFILE</h3> <p data-astro-cid-iyzdqnlb>
Designer and developer with proven teamwork and leadership
                  experience. Successfully implemented projects by structuring
                  project requirements efficiently. Produced effective print and
                  digital assets and built converting websites, digital products,
                  and frontends with HTML, CSS, and JavaScript. Strong Proficiency
                  in Figma and Visual Studio Code, master of Adobe XD, Illustrator,
                  InDesign, Photoshop.
</p> </div> <!-- Work experience --> <div class="experience" data-astro-cid-iyzdqnlb> <h3 data-astro-cid-iyzdqnlb>EXPERIENCE</h3> <h4 data-astro-cid-iyzdqnlb>PRINCIPAL WEB DEVELOPER</h4> <h5 data-astro-cid-iyzdqnlb>MAVERIK / 2023 - PRESENT</h5> <ul data-astro-cid-iyzdqnlb> <li data-astro-cid-iyzdqnlb>
As the principal (and only) web developer, I'm responsible for
                    the entirely new codebase and architecture of all Maverik and
                    Kum & Go web properties.
</li> </ul> <h4 data-astro-cid-iyzdqnlb>WEB DEVELOPMENT CONSULTANT</h4> <h5 data-astro-cid-iyzdqnlb>ASTROPOST / 2022 - PRESENT</h5> <ul data-astro-cid-iyzdqnlb> <li data-astro-cid-iyzdqnlb>
I consult clients and build high performing web architectures
                    with headless CMS integration.
</li> </ul> <h4 data-astro-cid-iyzdqnlb>FREELANCE DESIGNER / DEVELOPER</h4> <h5 data-astro-cid-iyzdqnlb>FREELANCE / 2007 - 2022</h5> <ul data-astro-cid-iyzdqnlb> <li data-astro-cid-iyzdqnlb>
I designed and built engaging websites, user interfaces, visual
                    identities, digital products, and online assets.
</li> </ul> <h4 data-astro-cid-iyzdqnlb>GRAPHIC DESIGNER / WEB DEVELOPER</h4> <h5 data-astro-cid-iyzdqnlb>8FISH / 2008 - 2009</h5> <ul data-astro-cid-iyzdqnlb> <li data-astro-cid-iyzdqnlb>
Elevated brands by designing brand identities, web and print
                    graphics, websites, social media content, and other digital
                    media assets.
</li> </ul> <h4 data-astro-cid-iyzdqnlb>POLICE OFFICER</h4> <h5 data-astro-cid-iyzdqnlb> <span data-astro-cid-iyzdqnlb>-----------------------------------</span> POLICE DEPARTMENT
                  / 2021 - 2023
</h5> <ul data-astro-cid-iyzdqnlb> <li data-astro-cid-iyzdqnlb>
Contributed to educational and community outreach campaigns as
                    the liaison between the police department and the marketing
                    department.
</li> <li data-astro-cid-iyzdqnlb>
Generated meaningful content for a safety app currently in
                    development.
</li> </ul> <h4 data-astro-cid-iyzdqnlb>POLICE DETECTIVE</h4> <h5 data-astro-cid-iyzdqnlb> <span data-astro-cid-iyzdqnlb>------------------</span> POLICE DEPARTMENT / 2015 - 2021
</h5> <ul data-astro-cid-iyzdqnlb> <li data-astro-cid-iyzdqnlb>
Developed and supervised a comprehensive firearm deployment and
                    training program.
</li> <li data-astro-cid-iyzdqnlb>
Positively impacted the lives of crime victims and people in
                    crisis through empathetic communication and solid, complete
                    criminal investigations.
</li> </ul> <h4 data-astro-cid-iyzdqnlb>POLICE LIEUTENANT</h4> <h5 data-astro-cid-iyzdqnlb> <span data-astro-cid-iyzdqnlb>-------------------------</span> POLICE DEPARTMENT / 2010 -
                  2015
</h5> <ul data-astro-cid-iyzdqnlb> <li data-astro-cid-iyzdqnlb>
Improved transparency and access to resources by building the
                    department's first website and social media channels - and
</li> <li data-astro-cid-iyzdqnlb>providing timely press releases.</li> <li data-astro-cid-iyzdqnlb>
Fostered strong, meaningful community relationships through
                    events and outreach programs.
</li> <li data-astro-cid-iyzdqnlb>
Cultivated strong relationships with other public safety
                    agencies to improve service quality.
</li> <li data-astro-cid-iyzdqnlb>
Quarterbacked operations, training, and budget to provide the
                    most effective service to the community.
</li> <li data-astro-cid-iyzdqnlb>
Developed Reserve Officer program that slashed personnel budget
                    by 30%.
</li> </ul> <!-- Education history --> <h3 data-astro-cid-iyzdqnlb>EDUCATION</h3> <h4 data-astro-cid-iyzdqnlb>BACHELOR OF SCIENCE / DIGITAL CINEMATOGRAPHY</h4> <h5 data-astro-cid-iyzdqnlb><span data-astro-cid-iyzdqnlb>------------------</span> UNIVERSITY</h5> <p data-astro-cid-iyzdqnlb>GPA 3.99 / VALEDICTORIAN</p> <p data-astro-cid-iyzdqnlb>&nbsp;</p> <h4 data-astro-cid-iyzdqnlb>ASSOCIATE OF APPLIED SCIENCE / GRAPHIC DESIGN</h4> <h5 data-astro-cid-iyzdqnlb>COLLEGE OF <span data-astro-cid-iyzdqnlb>------------------</span></h5> </div> <!-- Resume skills breakdown --> <div class="skills" data-astro-cid-iyzdqnlb> <h3 data-astro-cid-iyzdqnlb>HARD SKILLS</h3> <ul data-astro-cid-iyzdqnlb> <li data-astro-cid-iyzdqnlb>Graphic / Layout Design</li> <li data-astro-cid-iyzdqnlb>Product Design</li> <li data-astro-cid-iyzdqnlb>UI/UX Design</li> <li data-astro-cid-iyzdqnlb>Adobe XD</li> <li data-astro-cid-iyzdqnlb>Adobe Illustrator</li> <li data-astro-cid-iyzdqnlb>Adobe InDesign</li> <li data-astro-cid-iyzdqnlb>Adobe Photoshop</li> <li data-astro-cid-iyzdqnlb>Figma</li> <li data-astro-cid-iyzdqnlb>HTML / CSS / JavaScript</li> <li data-astro-cid-iyzdqnlb>Accessibility (a11y)</li> </ul> <h3 data-astro-cid-iyzdqnlb>SOFT SKILLS</h3> <ul data-astro-cid-iyzdqnlb> <li data-astro-cid-iyzdqnlb>Problem Solving</li> <li data-astro-cid-iyzdqnlb>Visual Content Creation</li> <li data-astro-cid-iyzdqnlb>Decision Making</li> <li data-astro-cid-iyzdqnlb>Team Leadership</li> <li data-astro-cid-iyzdqnlb>Strategic Planning</li> <li data-astro-cid-iyzdqnlb>Interpersonal Communication</li> <li data-astro-cid-iyzdqnlb>Critical Thinking</li> <li data-astro-cid-iyzdqnlb>Presentations</li> </ul> </div> </div> <div class="resume-download" data-astro-cid-iyzdqnlb> <a href="https://github.com/nickbravodev/nickbravodev/raw/main/resume/nick-bravo-developer-resume.pdf" target="_blank" aria-label="Download Resume" data-astro-cid-iyzdqnlb> ${renderComponent($$result, "Icon", $$Icon, { "name": "download", "data-astro-cid-iyzdqnlb": true })} </a> </div> </div> </div> </section>  `;
}, "/Users/nb258622/dev/Github/nickbravodev-v2/src/components/ResumePopout.astro", void 0);

const $$Astro$4 = createAstro("https://nickbravo.dev");
const $$MainLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const {
    title = "NickBravo.dev - Designer. Developer. Problem solver.",
    description = "I build engaging, high-performing websites, graphics, and digital assets to solidify brand authority and trust across platforms.",
    og_image = "https://nickbravo.dev/images/opengraph.png",
    og_url = "https://nickbravo.dev/"
  } = Astro2.props;
  return renderTemplate`<html lang="en" prefix="og: https://ogp.me/ns#"> ${renderComponent($$result, "MainHead", $$MainHead, { "title": title, "description": description, "og_image": og_image, "og_url": og_url })}${maybeRenderHead()}<body> ${renderComponent($$result, "Nav", $$Nav, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> <section id="contact" class="p-0"> <div class="container"> <div class="flex align-items-start justify-content-center"> ${renderComponent($$result, "ContactForm", $$ContactForm, {})} </div> </div> </section> ${renderComponent($$result, "Footer", $$Footer, {})} ${renderComponent($$result, "ResumePopout", $$ResumePopout, {})} </body></html>`;
}, "/Users/nb258622/dev/Github/nickbravodev-v2/src/layouts/MainLayout.astro", void 0);

const $$Astro$3 = createAstro("https://nickbravo.dev");
const $$Container = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Container;
  const {
    id = "",
    background = "",
    columns = "",
    classes = ""
  } = Astro2.props;
  return renderTemplate`<!-- Banner section -->${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`banner-section
    ${background && "bg"} 
    ${background.includes("alt") && "alt"} 
    ${background.includes("map") && "map"} 
    ${background.includes("swoop") && "swoop"} 
    ${background.includes("full") && "full"} 
    ${columns === "2" && "container__2-col"} 
    ${columns === "3" && "container__3-col"} 
    ${columns === "4" && "container__4-col"} 
    ${classes}`, "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/Users/nb258622/dev/Github/nickbravodev-v2/src/components/Container.astro", void 0);

const $$Astro$2 = createAstro("https://nickbravo.dev");
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Button;
  const commonButtonData = [
    {
      slug: "contact",
      text: "Contact Me",
      href: "#contact",
      type: "outline"
    },
    {
      slug: "resume",
      text: "Resume",
      href: "#resume",
      classes: "resume-trigger",
      id: "resume-trigger",
      type: "outline"
    },
    {
      slug: "_template",
      // shortcut - compares against href when placing Button component
      href: "/path-to-page",
      // Everything below can be overridded when placing Button component
      text: "Button Text",
      target: "_blank",
      // "_blank" for new window - "_parent" dufault
      size: "lg",
      // "sm" or "lg" - md default
      type: "outline",
      // "outline" - solid default
      color: "secondary",
      // "secondary" - primary default
      icon: {
        name: "icon-name",
        side: "left"
        // "left" or "right"
      },
      classes: "d-none"
      // any additional classes you want to apply to this button
    }
  ];
  const {
    href,
    text,
    target,
    size,
    type,
    color,
    icon,
    classes,
    ...rest
  } = Astro2.props;
  const buttonCompare = commonButtonData.find((item) => item.slug === href);
  const buttonHref = buttonCompare ? buttonCompare.href : href;
  const buttonText = !text && buttonCompare ? buttonCompare.text : text;
  const buttonTarget = !target && buttonCompare ? buttonCompare.target : target;
  const buttonSize = !size && buttonCompare ? buttonCompare.size : size;
  const buttonType = !type && buttonCompare ? buttonCompare.type : type;
  const buttonColor = !color && buttonCompare ? buttonCompare.color : color;
  const buttonClasses = !classes && buttonCompare ? buttonCompare.classes : classes;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(buttonHref, "href")}${addAttribute(buttonTarget, "target")}${addAttribute(buttonText, "aria-label")}${addAttribute(buttonText, "aria-roledescription")}${addAttribute([
    "button",
    buttonClasses,
    buttonSize,
    buttonType,
    buttonColor
  ], "class:list")}${spreadAttributes(rest)}>${// Sets left icon if applicable
  !icon && buttonCompare && (buttonCompare.icon && buttonCompare.icon.side === "left") ? renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": buttonCompare.icon.name, "size": "22", "class": "me-2" })}` : icon && icon.side === "left" && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon.name, "size": "22", "class": "me-2" })}`} <span>${buttonText}</span> ${// Sets right icon if applicable
  !icon && buttonCompare && (buttonCompare.icon && buttonCompare.icon.side === "right") ? renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": buttonCompare.icon.name, "size": "22", "class": "me-2" })}` : icon && icon.side === "right" && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon.name, "size": "22", "class": "me-2" })}`}</a>`;
}, "/Users/nb258622/dev/Github/nickbravodev-v2/src/components/Button.astro", void 0);

const $$Astro$1 = createAstro("https://nickbravo.dev");
const $$Banner = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Banner;
  const {
    type = "",
    eyebrow = "",
    h1 = "",
    h2 = "",
    h3 = "",
    p1 = "",
    p2 = "",
    p3 = "",
    sm1 = "",
    sm2 = "",
    sm3 = "",
    id = "",
    position = "",
    text_align = "",
    heading_size = "",
    heading_style = "",
    body_size = "",
    theme = "",
    size = "",
    icon = "",
    image = "",
    image_alt = "",
    image_loading = "",
    aspect_ratio = "",
    rounded_corners = "",
    button1_link = "",
    button1_text = "",
    button1_target = "",
    button1_type = "",
    button1_icon = "",
    button2_link = "",
    button2_text = "",
    button2_target = "",
    button2_type = "",
    button2_icon = "",
    button_size = "",
    pub_date = "",
    start_date = "",
    exp_date = "",
    brand = "",
    banner_color = "",
    banner_border = "",
    classes = "",
    banner_classes = "",
    image_round_corners = "",
    image_classes = "",
    grid_span = "",
    isActive = "",
    overlay = "",
    shadow = ""
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`wrapper
        ${heading_size.includes("xxl") && "heading-xxl"}
        ${heading_size.includes("xl") && "heading-xl"}
        ${heading_size.includes("lg") && "heading-lg"}
        ${heading_size.includes("md") && "heading-md"}
        ${heading_size.includes("sm") && "heading-sm"}
        ${heading_size.includes("xs") && "heading-xs"}
        ${heading_style.includes("hero") && "heading-style-hero"}
        ${heading_style.includes("banner") && "heading-style-banner"}
        ${body_size.includes("xl") && "body-xl"}
        ${body_size.includes("lg") && "body-lg"}
        ${body_size.includes("md") && "body-md"}
        ${body_size.includes("sm") && "body-sm"}
        ${body_size.includes("xs") && "body-xs"}
        ${banner_color.includes("alt") && "banner__bg-alt"}
        ${banner_color.includes("border") && "banner__border"}
        ${grid_span.includes("all") && "grid-span-all"}
        ${isActive === true && "active"}
        ${classes}`, "class")}> <div${addAttribute(`${type.includes("hero") ? "hero" : type.includes("banner") ? "banner" : "card"}
    ${(size.includes("medium") || size.includes("md")) && "size-medium"}
    ${(size.includes("small") || size.includes("sm")) && "size-small"}
        ${theme.includes("full") && "full-width"}
        ${theme.includes("card") && "text-card"}
        ${theme.includes("light") && "theme-light"}
        ${theme.includes("tape") && "tape"}
        ${overlay.includes("none") && "no-overlay"}
        ${shadow.includes("none") && "no-shadow"}
        ${(position.includes("right") || position.includes("reverse")) && "position-right"}
        ${position.includes("center") && "position-center"}
        ${position.includes("top") && "position-top"}
        ${position.includes("bottom") && "position-bottom"}
        ${!image && "text-only"}
        ${rounded_corners.includes("true") && "rounded-corners"}
        ${banner_border.includes("true") && "border"}
        ${text_align.includes("center") && "text-center"}
        ${text_align.includes("right") && "text-right"}

        ${banner_classes}`, "class")}> <div class="banner__inner"> <!-- Banner text --> ${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "" })}`} <div class="banner__text-block"> ${eyebrow && renderTemplate`<p class="eyebrow">${eyebrow}</p>`} ${h1 && renderTemplate`<h1 class="banner__heading">${unescapeHTML(h1)}</h1>`} ${h2 && renderTemplate`<h2 class="banner__heading">${unescapeHTML(h2)}</h2>`} ${h3 && renderTemplate`<h2 class="banner__heading">${unescapeHTML(h3)}</h2>`} ${pub_date && renderTemplate`<p class="banner__body">${unescapeHTML(pub_date)}</p>`} ${p1 && renderTemplate`<p class="banner__body">${unescapeHTML(p1)}</p>`} ${p2 && renderTemplate`<p class="banner__body">${unescapeHTML(p2)}</p>`} ${p3 && renderTemplate`<p class="banner__body">${unescapeHTML(p3)}</p>`} ${sm1 && renderTemplate`<p class="banner__small">${sm1}</p>`} ${sm2 && renderTemplate`<p class="banner__small">${sm2}</p>`} ${sm3 && renderTemplate`<p class="banner__small">${sm3}</p>`} <!-- CTA buttons --> ${(button1_link || button2_link) && renderTemplate`<div class="button-row"> ${(brand || exp_date) && renderTemplate`<div class="deal-footer"> ${brand && renderTemplate`<p class="card__brand">${brand}</p>`} ${exp_date && renderTemplate`<p class="card__exp-date">Expires ${exp_date}</p>`} </div>`} ${button1_link && renderTemplate`${renderComponent($$result, "Button", $$Button, { "href": button1_link, "text": button1_text, "target": button1_target, "icon": button1_icon, "size": button_size, "type": `${button1_type.includes("outline") && "outline"}
                  ${button1_type.includes("text") && "text"}`, "color": button1_type.includes("secondary") && "secondary" })}`} ${button2_link && renderTemplate`${renderComponent($$result, "Button", $$Button, { "href": button2_link, "text": button2_text, "target": button2_target, "icon": button2_icon, "size": button_size, "type": `${button2_type.includes("outline") && "outline"}
                  ${button2_type.includes("text") && "text"}`, "color": button2_type.includes("secondary") && "secondary" })}`} </div>`} </div> </div> <!-- Hero image --> ${image && renderTemplate`<div${addAttribute(`banner-image
        ${(aspect_ratio.includes("square") || aspect_ratio.includes("1")) && "square"}
        ${aspect_ratio.includes("3/2") && "ar-32"}
        ${aspect_ratio.includes("5/4") && "ar-54"}
        ${aspect_ratio.includes("auto") && "ar-auto"}
        ${image_round_corners.includes("true") && "round-corners"}
        ${image_classes}`, "class")}> ${renderComponent($$result, "Image", $$Image, { "src": image, "alt": image_alt, "format": "avif", "class": "cover-image", "width": image.width / 2, "densities": [1.5, 2], "loading": image_loading ? image_loading : "eager" })} </div>`} </div> </div> <!-- </div> --> <!-- </section> -->`;
}, "/Users/nb258622/dev/Github/nickbravodev-v2/src/components/Banner.astro", void 0);

const $$Astro = createAstro("https://nickbravo.dev");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Page not Found - NickBravo.dev", "description": "Sorry but the page you were looking for was not found.", "og_image": "https://nickbravo.dev/images/opengraph.png" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "id": "", "background": "", "columns": "1", "classes": "pt-80 pb-40" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Banner", $$Banner, { "type": "banner", "h1": "Page not found", "p1": "Sorry but the page you were looking for was lost in Neverland.", "button1_link": "/", "button1_text": "Run Home Jack", "button1_target": "", "button1_type": "outline", "button2_link": "", "button2_text": "", "position": "center", "theme": "", "size": "sm", "rounded_corners": "true", "heading_size": "lg", "body_size": "md" })} ` })} ` })}`;
}, "/Users/nb258622/dev/Github/nickbravodev-v2/src/pages/404.astro", void 0);

const $$file = "/Users/nb258622/dev/Github/nickbravodev-v2/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Button as $, _404 as _, $$Image as a, $$MainLayout as b, $$Icon as c, getConfiguredImageService as g, imageConfig as i };
