import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi'
import { z } from 'zod'

extendZodWithOpenApi(z)

// To export the global override of Zod types
export {
    extendZodWithOpenApi,
    ZodOpenAPIMetadata
} from '@asteasolutions/zod-to-openapi'

