import { ClassNameType } from "../types/reactTypes"

type TemplateType = {
    DESKTOP: {
        TOP: ClassNameType
        BOTTOM: ClassNameType
        LEFT: ClassNameType
        RIGHT: ClassNameType
    }
    MOBILE: {
        TOP: ClassNameType
        BOTTOM: ClassNameType
        LEFT: ClassNameType
        RIGHT: ClassNameType
    }
}

const COMMON_STYLES = `relative bg-matte border border-smoke`

export const DRAWER_TEMPLATE: TemplateType = {
    DESKTOP: {
        BOTTOM: ``,
        LEFT: ``,
        RIGHT: ``,
        TOP: ``,
    },
    MOBILE: {
        TOP: `${COMMON_STYLES} max-sm:rounded-b-3xl max-sm:px-4 max-sm:pb-8`,
        BOTTOM: `${COMMON_STYLES} max-sm:rounded-t-3xl max-sm:px-4 max-sm:pt-8`,
        LEFT: `${COMMON_STYLES} max-sm:rounded-3xl max-sm:px-4 max-sm:py-6`,
        RIGHT: `${COMMON_STYLES} max-sm:rounded-3xl max-sm:px-4 max-sm:py-6`
    }
}

export const DIALOG_TEMPLATE: TemplateType = {
    DESKTOP: {
        TOP: `${COMMON_STYLES} sm:rounded-2xl sm:px-4 sm:py-5`,
        BOTTOM: `${COMMON_STYLES} sm:rounded-2xl sm:px-4 sm:py-5`,
        LEFT: `${COMMON_STYLES} sm:rounded-2xl sm:px-4 sm:py-5`,
        RIGHT: `${COMMON_STYLES} sm:rounded-2xl sm:px-4 sm:py-5`
    },
    MOBILE: {
        TOP: `${COMMON_STYLES} max-sm:rounded-2xl max-sm:px-4 max-sm:py-5`,
        BOTTOM: `${COMMON_STYLES} max-sm:rounded-2xl max-sm:px-4 max-sm:py-5`,
        LEFT: `${COMMON_STYLES} max-sm:rounded-2xl max-sm:px-4 max-sm:py-5`,
        RIGHT: `${COMMON_STYLES} max-sm:rounded-2xl max-sm:px-4 max-sm:py-5`
    }
}

export const SHEET_TEMPLATE: TemplateType = {
    DESKTOP: {
        TOP: `${COMMON_STYLES} sm:p-8 w-full`,
        BOTTOM: `${COMMON_STYLES} sm:p-8 w-full`,
        LEFT: `${COMMON_STYLES} sm:p-8 h-full`,
        RIGHT: `${COMMON_STYLES} sm:p-8 h-full`
    },
    MOBILE: {
        TOP: `${COMMON_STYLES} max-sm:p-8 w-full`,
        BOTTOM: `${COMMON_STYLES} max-sm:p-8 w-full`,
        LEFT: `${COMMON_STYLES} max-sm:p-8 h-full`,
        RIGHT: `${COMMON_STYLES} max-sm:p-8 h-full`
    }
}