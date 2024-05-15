import * as yup from "yup"

export const infoSchema = yup.object({
    campaignName: yup.string().required("Name is required"),
    description: yup.string().required("Description is required"),
})
export type InfoSchema = yup.InferType<typeof infoSchema>


