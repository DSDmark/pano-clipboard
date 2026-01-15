/**
 * Vulkan-1.0
 */

/// <reference types="node" />
/// <reference path="GObject-2.0.d.ts" />

declare namespace Vulkan {

export class Bool32 {
    static name: string
}
export class DeviceAddress {
    static name: string
}
export class DeviceSize {
    static name: string
}
export class Flags {
    static name: string
}
export class SampleMask {
    static name: string
}
export class Buffer {
    static name: string
}
export class Image {
    static name: string
}
export class Instance {
    static name: string
}
export class PhysicalDevice {
    static name: string
}
export class Device {
    static name: string
}
export class Queue {
    static name: string
}
export class Semaphore {
    static name: string
}
export class CommandBuffer {
    static name: string
}
export class Fence {
    static name: string
}
export class DeviceMemory {
    static name: string
}
export class Event {
    static name: string
}
export class QueryPool {
    static name: string
}
export class BufferView {
    static name: string
}
export class ImageView {
    static name: string
}
export class ShaderModule {
    static name: string
}
export class PipelineCache {
    static name: string
}
export class PipelineLayout {
    static name: string
}
export class Pipeline {
    static name: string
}
export class RenderPass {
    static name: string
}
export class DescriptorSetLayout {
    static name: string
}
export class Sampler {
    static name: string
}
export class DescriptorSet {
    static name: string
}
export class DescriptorPool {
    static name: string
}
export class Framebuffer {
    static name: string
}
export class CommandPool {
    static name: string
}
export class Result {
    static name: string
}
export class StructureType {
    static name: string
}
export class PipelineCacheHeaderVersion {
    static name: string
}
export class ImageLayout {
    static name: string
}
export class ObjectType {
    static name: string
}
export class VendorId {
    static name: string
}
export class SystemAllocationScope {
    static name: string
}
export class InternalAllocationType {
    static name: string
}
export class Format {
    static name: string
}
export class ImageTiling {
    static name: string
}
export class ImageType {
    static name: string
}
export class PhysicalDeviceType {
    static name: string
}
export class QueryType {
    static name: string
}
export class SharingMode {
    static name: string
}
export class ComponentSwizzle {
    static name: string
}
export class ImageViewType {
    static name: string
}
export class BlendFactor {
    static name: string
}
export class BlendOp {
    static name: string
}
export class CompareOp {
    static name: string
}
export class DynamicState {
    static name: string
}
export class FrontFace {
    static name: string
}
export class VertexInputRate {
    static name: string
}
export class PrimitiveTopology {
    static name: string
}
export class PolygonMode {
    static name: string
}
export class StencilOp {
    static name: string
}
export class LogicOp {
    static name: string
}
export class BorderColor {
    static name: string
}
export class Filter {
    static name: string
}
export class SamplerAddressMode {
    static name: string
}
export class SamplerMipmapMode {
    static name: string
}
export class DescriptorType {
    static name: string
}
export class AttachmentLoadOp {
    static name: string
}
export class AttachmentStoreOp {
    static name: string
}
export class PipelineBindPoint {
    static name: string
}
export class CommandBufferLevel {
    static name: string
}
export class IndexType {
    static name: string
}
export class SubpassContents {
    static name: string
}
export class AccessFlagBits {
    static name: string
}
export class AccessFlags {
    static name: string
}
export class ImageAspectFlagBits {
    static name: string
}
export class ImageAspectFlags {
    static name: string
}
export class FormatFeatureFlagBits {
    static name: string
}
export class FormatFeatureFlags {
    static name: string
}
export class ImageCreateFlagBits {
    static name: string
}
export class ImageCreateFlags {
    static name: string
}
export class SampleCountFlagBits {
    static name: string
}
export class SampleCountFlags {
    static name: string
}
export class ImageUsageFlagBits {
    static name: string
}
export class ImageUsageFlags {
    static name: string
}
export class InstanceCreateFlagBits {
    static name: string
}
export class InstanceCreateFlags {
    static name: string
}
export class MemoryHeapFlagBits {
    static name: string
}
export class MemoryHeapFlags {
    static name: string
}
export class MemoryPropertyFlagBits {
    static name: string
}
export class MemoryPropertyFlags {
    static name: string
}
export class QueueFlagBits {
    static name: string
}
export class QueueFlags {
    static name: string
}
export class DeviceCreateFlags {
    static name: string
}
export class DeviceQueueCreateFlagBits {
    static name: string
}
export class DeviceQueueCreateFlags {
    static name: string
}
export class PipelineStageFlagBits {
    static name: string
}
export class PipelineStageFlags {
    static name: string
}
export class MemoryMapFlagBits {
    static name: string
}
export class MemoryMapFlags {
    static name: string
}
export class SparseMemoryBindFlagBits {
    static name: string
}
export class SparseMemoryBindFlags {
    static name: string
}
export class SparseImageFormatFlagBits {
    static name: string
}
export class SparseImageFormatFlags {
    static name: string
}
export class FenceCreateFlagBits {
    static name: string
}
export class FenceCreateFlags {
    static name: string
}
export class SemaphoreCreateFlags {
    static name: string
}
export class EventCreateFlagBits {
    static name: string
}
export class EventCreateFlags {
    static name: string
}
export class QueryPipelineStatisticFlagBits {
    static name: string
}
export class QueryPipelineStatisticFlags {
    static name: string
}
export class QueryPoolCreateFlags {
    static name: string
}
export class QueryResultFlagBits {
    static name: string
}
export class QueryResultFlags {
    static name: string
}
export class BufferCreateFlagBits {
    static name: string
}
export class BufferCreateFlags {
    static name: string
}
export class BufferUsageFlagBits {
    static name: string
}
export class BufferUsageFlags {
    static name: string
}
export class BufferViewCreateFlags {
    static name: string
}
export class ImageViewCreateFlagBits {
    static name: string
}
export class ImageViewCreateFlags {
    static name: string
}
export class ShaderModuleCreateFlags {
    static name: string
}
export class PipelineCacheCreateFlagBits {
    static name: string
}
export class PipelineCacheCreateFlags {
    static name: string
}
export class ColorComponentFlagBits {
    static name: string
}
export class ColorComponentFlags {
    static name: string
}
export class PipelineCreateFlagBits {
    static name: string
}
export class PipelineCreateFlags {
    static name: string
}
export class PipelineShaderStageCreateFlagBits {
    static name: string
}
export class PipelineShaderStageCreateFlags {
    static name: string
}
export class ShaderStageFlagBits {
    static name: string
}
export class CullModeFlagBits {
    static name: string
}
export class CullModeFlags {
    static name: string
}
export class PipelineVertexInputStateCreateFlags {
    static name: string
}
export class PipelineInputAssemblyStateCreateFlags {
    static name: string
}
export class PipelineTessellationStateCreateFlags {
    static name: string
}
export class PipelineViewportStateCreateFlags {
    static name: string
}
export class PipelineRasterizationStateCreateFlags {
    static name: string
}
export class PipelineMultisampleStateCreateFlags {
    static name: string
}
export class PipelineDepthStencilStateCreateFlagBits {
    static name: string
}
export class PipelineDepthStencilStateCreateFlags {
    static name: string
}
export class PipelineColorBlendStateCreateFlagBits {
    static name: string
}
export class PipelineColorBlendStateCreateFlags {
    static name: string
}
export class PipelineDynamicStateCreateFlags {
    static name: string
}
export class PipelineLayoutCreateFlagBits {
    static name: string
}
export class PipelineLayoutCreateFlags {
    static name: string
}
export class ShaderStageFlags {
    static name: string
}
export class SamplerCreateFlagBits {
    static name: string
}
export class SamplerCreateFlags {
    static name: string
}
export class DescriptorPoolCreateFlagBits {
    static name: string
}
export class DescriptorPoolCreateFlags {
    static name: string
}
export class DescriptorPoolResetFlags {
    static name: string
}
export class DescriptorSetLayoutCreateFlagBits {
    static name: string
}
export class DescriptorSetLayoutCreateFlags {
    static name: string
}
export class AttachmentDescriptionFlagBits {
    static name: string
}
export class AttachmentDescriptionFlags {
    static name: string
}
export class DependencyFlagBits {
    static name: string
}
export class DependencyFlags {
    static name: string
}
export class FramebufferCreateFlagBits {
    static name: string
}
export class FramebufferCreateFlags {
    static name: string
}
export class RenderPassCreateFlagBits {
    static name: string
}
export class RenderPassCreateFlags {
    static name: string
}
export class SubpassDescriptionFlagBits {
    static name: string
}
export class SubpassDescriptionFlags {
    static name: string
}
export class CommandPoolCreateFlagBits {
    static name: string
}
export class CommandPoolCreateFlags {
    static name: string
}
export class CommandPoolResetFlagBits {
    static name: string
}
export class CommandPoolResetFlags {
    static name: string
}
export class CommandBufferUsageFlagBits {
    static name: string
}
export class CommandBufferUsageFlags {
    static name: string
}
export class QueryControlFlagBits {
    static name: string
}
export class QueryControlFlags {
    static name: string
}
export class CommandBufferResetFlagBits {
    static name: string
}
export class CommandBufferResetFlags {
    static name: string
}
export class StencilFaceFlagBits {
    static name: string
}
export class StencilFaceFlags {
    static name: string
}
export class Extent2D {
    static name: string
}
export class Extent3D {
    static name: string
}
export class Offset2D {
    static name: string
}
export class Offset3D {
    static name: string
}
export class Rect2D {
    static name: string
}
export class BaseInStructure {
    static name: string
}
export class BaseOutStructure {
    static name: string
}
export class BufferMemoryBarrier {
    static name: string
}
export class DispatchIndirectCommand {
    static name: string
}
export class DrawIndexedIndirectCommand {
    static name: string
}
export class DrawIndirectCommand {
    static name: string
}
export class ImageSubresourceRange {
    static name: string
}
export class ImageMemoryBarrier {
    static name: string
}
export class MemoryBarrier {
    static name: string
}
export class PipelineCacheHeaderVersionOne {
    static name: string
}
export class AllocationCallbacks {
    static name: string
}
export class ApplicationInfo {
    static name: string
}
export class FormatProperties {
    static name: string
}
export class ImageFormatProperties {
    static name: string
}
export class InstanceCreateInfo {
    static name: string
}
export class MemoryHeap {
    static name: string
}
export class MemoryType {
    static name: string
}
export class PhysicalDeviceFeatures {
    static name: string
}
export class PhysicalDeviceLimits {
    static name: string
}
export class PhysicalDeviceMemoryProperties {
    static name: string
}
export class PhysicalDeviceSparseProperties {
    static name: string
}
export class PhysicalDeviceProperties {
    static name: string
}
export class QueueFamilyProperties {
    static name: string
}
export class DeviceQueueCreateInfo {
    static name: string
}
export class DeviceCreateInfo {
    static name: string
}
export class ExtensionProperties {
    static name: string
}
export class LayerProperties {
    static name: string
}
export class SubmitInfo {
    static name: string
}
export class MappedMemoryRange {
    static name: string
}
export class MemoryAllocateInfo {
    static name: string
}
export class MemoryRequirements {
    static name: string
}
export class SparseMemoryBind {
    static name: string
}
export class SparseBufferMemoryBindInfo {
    static name: string
}
export class SparseImageOpaqueMemoryBindInfo {
    static name: string
}
export class ImageSubresource {
    static name: string
}
export class SparseImageMemoryBind {
    static name: string
}
export class SparseImageMemoryBindInfo {
    static name: string
}
export class BindSparseInfo {
    static name: string
}
export class SparseImageFormatProperties {
    static name: string
}
export class SparseImageMemoryRequirements {
    static name: string
}
export class FenceCreateInfo {
    static name: string
}
export class SemaphoreCreateInfo {
    static name: string
}
export class EventCreateInfo {
    static name: string
}
export class QueryPoolCreateInfo {
    static name: string
}
export class BufferCreateInfo {
    static name: string
}
export class BufferViewCreateInfo {
    static name: string
}
export class ImageCreateInfo {
    static name: string
}
export class SubresourceLayout {
    static name: string
}
export class ComponentMapping {
    static name: string
}
export class ImageViewCreateInfo {
    static name: string
}
export class ShaderModuleCreateInfo {
    static name: string
}
export class PipelineCacheCreateInfo {
    static name: string
}
export class SpecializationMapEntry {
    static name: string
}
export class SpecializationInfo {
    static name: string
}
export class PipelineShaderStageCreateInfo {
    static name: string
}
export class ComputePipelineCreateInfo {
    static name: string
}
export class VertexInputBindingDescription {
    static name: string
}
export class VertexInputAttributeDescription {
    static name: string
}
export class PipelineVertexInputStateCreateInfo {
    static name: string
}
export class PipelineInputAssemblyStateCreateInfo {
    static name: string
}
export class PipelineTessellationStateCreateInfo {
    static name: string
}
export class Viewport {
    static name: string
}
export class PipelineViewportStateCreateInfo {
    static name: string
}
export class PipelineRasterizationStateCreateInfo {
    static name: string
}
export class PipelineMultisampleStateCreateInfo {
    static name: string
}
export class StencilOpState {
    static name: string
}
export class PipelineDepthStencilStateCreateInfo {
    static name: string
}
export class PipelineColorBlendAttachmentState {
    static name: string
}
export class PipelineColorBlendStateCreateInfo {
    static name: string
}
export class PipelineDynamicStateCreateInfo {
    static name: string
}
export class GraphicsPipelineCreateInfo {
    static name: string
}
export class PushConstantRange {
    static name: string
}
export class PipelineLayoutCreateInfo {
    static name: string
}
export class SamplerCreateInfo {
    static name: string
}
export class CopyDescriptorSet {
    static name: string
}
export class DescriptorBufferInfo {
    static name: string
}
export class DescriptorImageInfo {
    static name: string
}
export class DescriptorPoolSize {
    static name: string
}
export class DescriptorPoolCreateInfo {
    static name: string
}
export class DescriptorSetAllocateInfo {
    static name: string
}
export class DescriptorSetLayoutBinding {
    static name: string
}
export class DescriptorSetLayoutCreateInfo {
    static name: string
}
export class WriteDescriptorSet {
    static name: string
}
export class AttachmentDescription {
    static name: string
}
export class AttachmentReference {
    static name: string
}
export class FramebufferCreateInfo {
    static name: string
}
export class SubpassDescription {
    static name: string
}
export class SubpassDependency {
    static name: string
}
export class RenderPassCreateInfo {
    static name: string
}
export class CommandPoolCreateInfo {
    static name: string
}
export class CommandBufferAllocateInfo {
    static name: string
}
export class CommandBufferInheritanceInfo {
    static name: string
}
export class CommandBufferBeginInfo {
    static name: string
}
export class BufferCopy {
    static name: string
}
export class ImageSubresourceLayers {
    static name: string
}
export class BufferImageCopy {
    static name: string
}
export class ClearColorValue {
    static name: string
}
export class ClearDepthStencilValue {
    static name: string
}
export class ClearValue {
    static name: string
}
export class ClearAttachment {
    static name: string
}
export class ClearRect {
    static name: string
}
export class ImageBlit {
    static name: string
}
export class ImageCopy {
    static name: string
}
export class ImageResolve {
    static name: string
}
export class RenderPassBeginInfo {
    static name: string
}
export class SamplerYcbcrConversion {
    static name: string
}
export class DescriptorUpdateTemplate {
    static name: string
}
export class PointClippingBehavior {
    static name: string
}
export class TessellationDomainOrigin {
    static name: string
}
export class SamplerYcbcrModelConversion {
    static name: string
}
export class SamplerYcbcrRange {
    static name: string
}
export class ChromaLocation {
    static name: string
}
export class DescriptorUpdateTemplateType {
    static name: string
}
export class SubgroupFeatureFlagBits {
    static name: string
}
export class SubgroupFeatureFlags {
    static name: string
}
export class PeerMemoryFeatureFlagBits {
    static name: string
}
export class PeerMemoryFeatureFlags {
    static name: string
}
export class MemoryAllocateFlagBits {
    static name: string
}
export class MemoryAllocateFlags {
    static name: string
}
export class CommandPoolTrimFlags {
    static name: string
}
export class DescriptorUpdateTemplateCreateFlags {
    static name: string
}
export class ExternalMemoryHandleTypeFlagBits {
    static name: string
}
export class ExternalMemoryHandleTypeFlags {
    static name: string
}
export class ExternalMemoryFeatureFlagBits {
    static name: string
}
export class ExternalMemoryFeatureFlags {
    static name: string
}
export class ExternalFenceHandleTypeFlagBits {
    static name: string
}
export class ExternalFenceHandleTypeFlags {
    static name: string
}
export class ExternalFenceFeatureFlagBits {
    static name: string
}
export class ExternalFenceFeatureFlags {
    static name: string
}
export class FenceImportFlagBits {
    static name: string
}
export class FenceImportFlags {
    static name: string
}
export class SemaphoreImportFlagBits {
    static name: string
}
export class SemaphoreImportFlags {
    static name: string
}
export class ExternalSemaphoreHandleTypeFlagBits {
    static name: string
}
export class ExternalSemaphoreHandleTypeFlags {
    static name: string
}
export class ExternalSemaphoreFeatureFlagBits {
    static name: string
}
export class ExternalSemaphoreFeatureFlags {
    static name: string
}
export class PhysicalDeviceSubgroupProperties {
    static name: string
}
export class BindBufferMemoryInfo {
    static name: string
}
export class BindImageMemoryInfo {
    static name: string
}
export class PhysicalDevice16BitStorageFeatures {
    static name: string
}
export class MemoryDedicatedRequirements {
    static name: string
}
export class MemoryDedicatedAllocateInfo {
    static name: string
}
export class MemoryAllocateFlagsInfo {
    static name: string
}
export class DeviceGroupRenderPassBeginInfo {
    static name: string
}
export class DeviceGroupCommandBufferBeginInfo {
    static name: string
}
export class DeviceGroupSubmitInfo {
    static name: string
}
export class DeviceGroupBindSparseInfo {
    static name: string
}
export class BindBufferMemoryDeviceGroupInfo {
    static name: string
}
export class BindImageMemoryDeviceGroupInfo {
    static name: string
}
export class PhysicalDeviceGroupProperties {
    static name: string
}
export class DeviceGroupDeviceCreateInfo {
    static name: string
}
export class BufferMemoryRequirementsInfo2 {
    static name: string
}
export class ImageMemoryRequirementsInfo2 {
    static name: string
}
export class ImageSparseMemoryRequirementsInfo2 {
    static name: string
}
export class MemoryRequirements2 {
    static name: string
}
export class SparseImageMemoryRequirements2 {
    static name: string
}
export class PhysicalDeviceFeatures2 {
    static name: string
}
export class PhysicalDeviceProperties2 {
    static name: string
}
export class FormatProperties2 {
    static name: string
}
export class ImageFormatProperties2 {
    static name: string
}
export class PhysicalDeviceImageFormatInfo2 {
    static name: string
}
export class QueueFamilyProperties2 {
    static name: string
}
export class PhysicalDeviceMemoryProperties2 {
    static name: string
}
export class SparseImageFormatProperties2 {
    static name: string
}
export class PhysicalDeviceSparseImageFormatInfo2 {
    static name: string
}
export class PhysicalDevicePointClippingProperties {
    static name: string
}
export class InputAttachmentAspectReference {
    static name: string
}
export class RenderPassInputAttachmentAspectCreateInfo {
    static name: string
}
export class ImageViewUsageCreateInfo {
    static name: string
}
export class PipelineTessellationDomainOriginStateCreateInfo {
    static name: string
}
export class RenderPassMultiviewCreateInfo {
    static name: string
}
export class PhysicalDeviceMultiviewFeatures {
    static name: string
}
export class PhysicalDeviceMultiviewProperties {
    static name: string
}
export class PhysicalDeviceVariablePointersFeatures {
    static name: string
}
export class PhysicalDeviceVariablePointerFeatures {
    static name: string
}
export class PhysicalDeviceProtectedMemoryFeatures {
    static name: string
}
export class PhysicalDeviceProtectedMemoryProperties {
    static name: string
}
export class DeviceQueueInfo2 {
    static name: string
}
export class ProtectedSubmitInfo {
    static name: string
}
export class SamplerYcbcrConversionCreateInfo {
    static name: string
}
export class SamplerYcbcrConversionInfo {
    static name: string
}
export class BindImagePlaneMemoryInfo {
    static name: string
}
export class ImagePlaneMemoryRequirementsInfo {
    static name: string
}
export class PhysicalDeviceSamplerYcbcrConversionFeatures {
    static name: string
}
export class SamplerYcbcrConversionImageFormatProperties {
    static name: string
}
export class DescriptorUpdateTemplateEntry {
    static name: string
}
export class DescriptorUpdateTemplateCreateInfo {
    static name: string
}
export class ExternalMemoryProperties {
    static name: string
}
export class PhysicalDeviceExternalImageFormatInfo {
    static name: string
}
export class ExternalImageFormatProperties {
    static name: string
}
export class PhysicalDeviceExternalBufferInfo {
    static name: string
}
export class ExternalBufferProperties {
    static name: string
}
export class PhysicalDeviceIDProperties {
    static name: string
}
export class ExternalMemoryImageCreateInfo {
    static name: string
}
export class ExternalMemoryBufferCreateInfo {
    static name: string
}
export class ExportMemoryAllocateInfo {
    static name: string
}
export class PhysicalDeviceExternalFenceInfo {
    static name: string
}
export class ExternalFenceProperties {
    static name: string
}
export class ExportFenceCreateInfo {
    static name: string
}
export class ExportSemaphoreCreateInfo {
    static name: string
}
export class PhysicalDeviceExternalSemaphoreInfo {
    static name: string
}
export class ExternalSemaphoreProperties {
    static name: string
}
export class PhysicalDeviceMaintenance3Properties {
    static name: string
}
export class DescriptorSetLayoutSupport {
    static name: string
}
export class PhysicalDeviceShaderDrawParametersFeatures {
    static name: string
}
export class PhysicalDeviceShaderDrawParameterFeatures {
    static name: string
}
export class DriverId {
    static name: string
}
export class ShaderFloatControlsIndependence {
    static name: string
}
export class SamplerReductionMode {
    static name: string
}
export class SemaphoreType {
    static name: string
}
export class ResolveModeFlagBits {
    static name: string
}
export class ResolveModeFlags {
    static name: string
}
export class DescriptorBindingFlagBits {
    static name: string
}
export class DescriptorBindingFlags {
    static name: string
}
export class SemaphoreWaitFlagBits {
    static name: string
}
export class SemaphoreWaitFlags {
    static name: string
}
export class PhysicalDeviceVulkan11Features {
    static name: string
}
export class PhysicalDeviceVulkan11Properties {
    static name: string
}
export class PhysicalDeviceVulkan12Features {
    static name: string
}
export class ConformanceVersion {
    static name: string
}
export class PhysicalDeviceVulkan12Properties {
    static name: string
}
export class ImageFormatListCreateInfo {
    static name: string
}
export class AttachmentDescription2 {
    static name: string
}
export class AttachmentReference2 {
    static name: string
}
export class SubpassDescription2 {
    static name: string
}
export class SubpassDependency2 {
    static name: string
}
export class RenderPassCreateInfo2 {
    static name: string
}
export class SubpassBeginInfo {
    static name: string
}
export class SubpassEndInfo {
    static name: string
}
export class PhysicalDevice8BitStorageFeatures {
    static name: string
}
export class PhysicalDeviceDriverProperties {
    static name: string
}
export class PhysicalDeviceShaderAtomicInt64Features {
    static name: string
}
export class PhysicalDeviceShaderFloat16Int8Features {
    static name: string
}
export class PhysicalDeviceFloatControlsProperties {
    static name: string
}
export class DescriptorSetLayoutBindingFlagsCreateInfo {
    static name: string
}
export class PhysicalDeviceDescriptorIndexingFeatures {
    static name: string
}
export class PhysicalDeviceDescriptorIndexingProperties {
    static name: string
}
export class DescriptorSetVariableDescriptorCountAllocateInfo {
    static name: string
}
export class DescriptorSetVariableDescriptorCountLayoutSupport {
    static name: string
}
export class SubpassDescriptionDepthStencilResolve {
    static name: string
}
export class PhysicalDeviceDepthStencilResolveProperties {
    static name: string
}
export class PhysicalDeviceScalarBlockLayoutFeatures {
    static name: string
}
export class ImageStencilUsageCreateInfo {
    static name: string
}
export class SamplerReductionModeCreateInfo {
    static name: string
}
export class PhysicalDeviceSamplerFilterMinmaxProperties {
    static name: string
}
export class PhysicalDeviceVulkanMemoryModelFeatures {
    static name: string
}
export class PhysicalDeviceImagelessFramebufferFeatures {
    static name: string
}
export class FramebufferAttachmentImageInfo {
    static name: string
}
export class FramebufferAttachmentsCreateInfo {
    static name: string
}
export class RenderPassAttachmentBeginInfo {
    static name: string
}
export class PhysicalDeviceUniformBufferStandardLayoutFeatures {
    static name: string
}
export class PhysicalDeviceShaderSubgroupExtendedTypesFeatures {
    static name: string
}
export class PhysicalDeviceSeparateDepthStencilLayoutsFeatures {
    static name: string
}
export class AttachmentReferenceStencilLayout {
    static name: string
}
export class AttachmentDescriptionStencilLayout {
    static name: string
}
export class PhysicalDeviceHostQueryResetFeatures {
    static name: string
}
export class PhysicalDeviceTimelineSemaphoreFeatures {
    static name: string
}
export class PhysicalDeviceTimelineSemaphoreProperties {
    static name: string
}
export class SemaphoreTypeCreateInfo {
    static name: string
}
export class TimelineSemaphoreSubmitInfo {
    static name: string
}
export class SemaphoreWaitInfo {
    static name: string
}
export class SemaphoreSignalInfo {
    static name: string
}
export class PhysicalDeviceBufferDeviceAddressFeatures {
    static name: string
}
export class BufferDeviceAddressInfo {
    static name: string
}
export class BufferOpaqueCaptureAddressCreateInfo {
    static name: string
}
export class MemoryOpaqueCaptureAddressAllocateInfo {
    static name: string
}
export class DeviceMemoryOpaqueCaptureAddressInfo {
    static name: string
}
export class Flags64 {
    static name: string
}
export class PrivateDataSlot {
    static name: string
}
export class PipelineCreationFeedbackFlagBits {
    static name: string
}
export class PipelineCreationFeedbackFlags {
    static name: string
}
export class ToolPurposeFlagBits {
    static name: string
}
export class ToolPurposeFlags {
    static name: string
}
export class PrivateDataSlotCreateFlags {
    static name: string
}
export class PipelineStageFlags2 {
    static name: string
}
export class PipelineStageFlagBits2 {
    static name: string
}
export class AccessFlags2 {
    static name: string
}
export class AccessFlagBits2 {
    static name: string
}
export class SubmitFlagBits {
    static name: string
}
export class SubmitFlags {
    static name: string
}
export class RenderingFlagBits {
    static name: string
}
export class RenderingFlags {
    static name: string
}
export class FormatFeatureFlags2 {
    static name: string
}
export class FormatFeatureFlagBits2 {
    static name: string
}
export class PhysicalDeviceVulkan13Features {
    static name: string
}
export class PhysicalDeviceVulkan13Properties {
    static name: string
}
export class PipelineCreationFeedback {
    static name: string
}
export class PipelineCreationFeedbackCreateInfo {
    static name: string
}
export class PhysicalDeviceShaderTerminateInvocationFeatures {
    static name: string
}
export class PhysicalDeviceToolProperties {
    static name: string
}
export class PhysicalDeviceShaderDemoteToHelperInvocationFeatures {
    static name: string
}
export class PhysicalDevicePrivateDataFeatures {
    static name: string
}
export class DevicePrivateDataCreateInfo {
    static name: string
}
export class PrivateDataSlotCreateInfo {
    static name: string
}
export class PhysicalDevicePipelineCreationCacheControlFeatures {
    static name: string
}
export class MemoryBarrier2 {
    static name: string
}
export class BufferMemoryBarrier2 {
    static name: string
}
export class ImageMemoryBarrier2 {
    static name: string
}
export class DependencyInfo {
    static name: string
}
export class SemaphoreSubmitInfo {
    static name: string
}
export class CommandBufferSubmitInfo {
    static name: string
}
export class SubmitInfo2 {
    static name: string
}
export class PhysicalDeviceSynchronization2Features {
    static name: string
}
export class PhysicalDeviceZeroInitializeWorkgroupMemoryFeatures {
    static name: string
}
export class PhysicalDeviceImageRobustnessFeatures {
    static name: string
}
export class BufferCopy2 {
    static name: string
}
export class CopyBufferInfo2 {
    static name: string
}
export class ImageCopy2 {
    static name: string
}
export class CopyImageInfo2 {
    static name: string
}
export class BufferImageCopy2 {
    static name: string
}
export class CopyBufferToImageInfo2 {
    static name: string
}
export class CopyImageToBufferInfo2 {
    static name: string
}
export class ImageBlit2 {
    static name: string
}
export class BlitImageInfo2 {
    static name: string
}
export class ImageResolve2 {
    static name: string
}
export class ResolveImageInfo2 {
    static name: string
}
export class PhysicalDeviceSubgroupSizeControlFeatures {
    static name: string
}
export class PhysicalDeviceSubgroupSizeControlProperties {
    static name: string
}
export class PipelineShaderStageRequiredSubgroupSizeCreateInfo {
    static name: string
}
export class PhysicalDeviceInlineUniformBlockFeatures {
    static name: string
}
export class PhysicalDeviceInlineUniformBlockProperties {
    static name: string
}
export class WriteDescriptorSetInlineUniformBlock {
    static name: string
}
export class DescriptorPoolInlineUniformBlockCreateInfo {
    static name: string
}
export class PhysicalDeviceTextureCompressionASTCHDRFeatures {
    static name: string
}
export class RenderingAttachmentInfo {
    static name: string
}
export class RenderingInfo {
    static name: string
}
export class PipelineRenderingCreateInfo {
    static name: string
}
export class PhysicalDeviceDynamicRenderingFeatures {
    static name: string
}
export class CommandBufferInheritanceRenderingInfo {
    static name: string
}
export class PhysicalDeviceShaderIntegerDotProductFeatures {
    static name: string
}
export class PhysicalDeviceShaderIntegerDotProductProperties {
    static name: string
}
export class PhysicalDeviceTexelBufferAlignmentProperties {
    static name: string
}
export class FormatProperties3 {
    static name: string
}
export class PhysicalDeviceMaintenance4Features {
    static name: string
}
export class PhysicalDeviceMaintenance4Properties {
    static name: string
}
export class DeviceBufferMemoryRequirements {
    static name: string
}
export class DeviceImageMemoryRequirements {
    static name: string
}
export class SurfaceKHR {
    static name: string
}
export class PresentModeKHR {
    static name: string
}
export class ColorSpaceKHR {
    static name: string
}
export class SurfaceTransformFlagBitsKHR {
    static name: string
}
export class CompositeAlphaFlagBitsKHR {
    static name: string
}
export class CompositeAlphaFlagsKHR {
    static name: string
}
export class SurfaceTransformFlagsKHR {
    static name: string
}
export class SurfaceCapabilitiesKHR {
    static name: string
}
export class SurfaceFormatKHR {
    static name: string
}
export class SwapchainKHR {
    static name: string
}
export class SwapchainCreateFlagBitsKHR {
    static name: string
}
export class SwapchainCreateFlagsKHR {
    static name: string
}
export class DeviceGroupPresentModeFlagBitsKHR {
    static name: string
}
export class DeviceGroupPresentModeFlagsKHR {
    static name: string
}
export class SwapchainCreateInfoKHR {
    static name: string
}
export class PresentInfoKHR {
    static name: string
}
export class ImageSwapchainCreateInfoKHR {
    static name: string
}
export class BindImageMemorySwapchainInfoKHR {
    static name: string
}
export class AcquireNextImageInfoKHR {
    static name: string
}
export class DeviceGroupPresentCapabilitiesKHR {
    static name: string
}
export class DeviceGroupPresentInfoKHR {
    static name: string
}
export class DeviceGroupSwapchainCreateInfoKHR {
    static name: string
}
export class DisplayKHR {
    static name: string
}
export class DisplayModeKHR {
    static name: string
}
export class DisplayModeCreateFlagsKHR {
    static name: string
}
export class DisplayPlaneAlphaFlagBitsKHR {
    static name: string
}
export class DisplayPlaneAlphaFlagsKHR {
    static name: string
}
export class DisplaySurfaceCreateFlagsKHR {
    static name: string
}
export class DisplayModeParametersKHR {
    static name: string
}
export class DisplayModeCreateInfoKHR {
    static name: string
}
export class DisplayModePropertiesKHR {
    static name: string
}
export class DisplayPlaneCapabilitiesKHR {
    static name: string
}
export class DisplayPlanePropertiesKHR {
    static name: string
}
export class DisplayPropertiesKHR {
    static name: string
}
export class DisplaySurfaceCreateInfoKHR {
    static name: string
}
export class DisplayPresentInfoKHR {
    static name: string
}
export class VideoSessionKHR {
    static name: string
}
export class VideoSessionParametersKHR {
    static name: string
}
export class QueryResultStatusKHR {
    static name: string
}
export class VideoCodecOperationFlagBitsKHR {
    static name: string
}
export class VideoCodecOperationFlagsKHR {
    static name: string
}
export class VideoChromaSubsamplingFlagBitsKHR {
    static name: string
}
export class VideoChromaSubsamplingFlagsKHR {
    static name: string
}
export class VideoComponentBitDepthFlagBitsKHR {
    static name: string
}
export class VideoComponentBitDepthFlagsKHR {
    static name: string
}
export class VideoCapabilityFlagBitsKHR {
    static name: string
}
export class VideoCapabilityFlagsKHR {
    static name: string
}
export class VideoSessionCreateFlagBitsKHR {
    static name: string
}
export class VideoSessionCreateFlagsKHR {
    static name: string
}
export class VideoSessionParametersCreateFlagsKHR {
    static name: string
}
export class VideoBeginCodingFlagsKHR {
    static name: string
}
export class VideoEndCodingFlagsKHR {
    static name: string
}
export class VideoCodingControlFlagBitsKHR {
    static name: string
}
export class VideoCodingControlFlagsKHR {
    static name: string
}
export class QueueFamilyQueryResultStatusPropertiesKHR {
    static name: string
}
export class QueueFamilyVideoPropertiesKHR {
    static name: string
}
export class VideoProfileInfoKHR {
    static name: string
}
export class VideoProfileListInfoKHR {
    static name: string
}
export class VideoCapabilitiesKHR {
    static name: string
}
export class PhysicalDeviceVideoFormatInfoKHR {
    static name: string
}
export class VideoFormatPropertiesKHR {
    static name: string
}
export class VideoPictureResourceInfoKHR {
    static name: string
}
export class VideoReferenceSlotInfoKHR {
    static name: string
}
export class VideoSessionMemoryRequirementsKHR {
    static name: string
}
export class BindVideoSessionMemoryInfoKHR {
    static name: string
}
export class VideoSessionCreateInfoKHR {
    static name: string
}
export class VideoSessionParametersCreateInfoKHR {
    static name: string
}
export class VideoSessionParametersUpdateInfoKHR {
    static name: string
}
export class VideoBeginCodingInfoKHR {
    static name: string
}
export class VideoEndCodingInfoKHR {
    static name: string
}
export class VideoCodingControlInfoKHR {
    static name: string
}
export class VideoDecodeCapabilityFlagBitsKHR {
    static name: string
}
export class VideoDecodeCapabilityFlagsKHR {
    static name: string
}
export class VideoDecodeUsageFlagBitsKHR {
    static name: string
}
export class VideoDecodeUsageFlagsKHR {
    static name: string
}
export class VideoDecodeFlagsKHR {
    static name: string
}
export class VideoDecodeCapabilitiesKHR {
    static name: string
}
export class VideoDecodeUsageInfoKHR {
    static name: string
}
export class VideoDecodeInfoKHR {
    static name: string
}
export class VideoEncodeH264CapabilityFlagBitsKHR {
    static name: string
}
export class VideoEncodeH264CapabilityFlagsKHR {
    static name: string
}
export class VideoEncodeH264StdFlagBitsKHR {
    static name: string
}
export class VideoEncodeH264StdFlagsKHR {
    static name: string
}
export class VideoEncodeH264RateControlFlagBitsKHR {
    static name: string
}
export class VideoEncodeH264RateControlFlagsKHR {
    static name: string
}
export class VideoEncodeH264CapabilitiesKHR {
    static name: string
}
export class VideoEncodeH264QpKHR {
    static name: string
}
export class VideoEncodeH264QualityLevelPropertiesKHR {
    static name: string
}
export class VideoEncodeH264SessionCreateInfoKHR {
    static name: string
}
export class VideoEncodeH264SessionParametersAddInfoKHR {
    static name: string
}
export class VideoEncodeH264SessionParametersCreateInfoKHR {
    static name: string
}
export class VideoEncodeH264SessionParametersGetInfoKHR {
    static name: string
}
export class VideoEncodeH264SessionParametersFeedbackInfoKHR {
    static name: string
}
export class VideoEncodeH264NaluSliceInfoKHR {
    static name: string
}
export class VideoEncodeH264PictureInfoKHR {
    static name: string
}
export class VideoEncodeH264DpbSlotInfoKHR {
    static name: string
}
export class VideoEncodeH264ProfileInfoKHR {
    static name: string
}
export class VideoEncodeH264RateControlInfoKHR {
    static name: string
}
export class VideoEncodeH264FrameSizeKHR {
    static name: string
}
export class VideoEncodeH264RateControlLayerInfoKHR {
    static name: string
}
export class VideoEncodeH264GopRemainingFrameInfoKHR {
    static name: string
}
export class VideoEncodeH265CapabilityFlagBitsKHR {
    static name: string
}
export class VideoEncodeH265CapabilityFlagsKHR {
    static name: string
}
export class VideoEncodeH265StdFlagBitsKHR {
    static name: string
}
export class VideoEncodeH265StdFlagsKHR {
    static name: string
}
export class VideoEncodeH265CtbSizeFlagBitsKHR {
    static name: string
}
export class VideoEncodeH265CtbSizeFlagsKHR {
    static name: string
}
export class VideoEncodeH265TransformBlockSizeFlagBitsKHR {
    static name: string
}
export class VideoEncodeH265TransformBlockSizeFlagsKHR {
    static name: string
}
export class VideoEncodeH265RateControlFlagBitsKHR {
    static name: string
}
export class VideoEncodeH265RateControlFlagsKHR {
    static name: string
}
export class VideoEncodeH265CapabilitiesKHR {
    static name: string
}
export class VideoEncodeH265SessionCreateInfoKHR {
    static name: string
}
export class VideoEncodeH265QpKHR {
    static name: string
}
export class VideoEncodeH265QualityLevelPropertiesKHR {
    static name: string
}
export class VideoEncodeH265SessionParametersAddInfoKHR {
    static name: string
}
export class VideoEncodeH265SessionParametersCreateInfoKHR {
    static name: string
}
export class VideoEncodeH265SessionParametersGetInfoKHR {
    static name: string
}
export class VideoEncodeH265SessionParametersFeedbackInfoKHR {
    static name: string
}
export class VideoEncodeH265NaluSliceSegmentInfoKHR {
    static name: string
}
export class VideoEncodeH265PictureInfoKHR {
    static name: string
}
export class VideoEncodeH265DpbSlotInfoKHR {
    static name: string
}
export class VideoEncodeH265ProfileInfoKHR {
    static name: string
}
export class VideoEncodeH265RateControlInfoKHR {
    static name: string
}
export class VideoEncodeH265FrameSizeKHR {
    static name: string
}
export class VideoEncodeH265RateControlLayerInfoKHR {
    static name: string
}
export class VideoEncodeH265GopRemainingFrameInfoKHR {
    static name: string
}
export class VideoDecodeH264PictureLayoutFlagBitsKHR {
    static name: string
}
export class VideoDecodeH264PictureLayoutFlagsKHR {
    static name: string
}
export class VideoDecodeH264ProfileInfoKHR {
    static name: string
}
export class VideoDecodeH264CapabilitiesKHR {
    static name: string
}
export class VideoDecodeH264SessionParametersAddInfoKHR {
    static name: string
}
export class VideoDecodeH264SessionParametersCreateInfoKHR {
    static name: string
}
export class VideoDecodeH264PictureInfoKHR {
    static name: string
}
export class VideoDecodeH264DpbSlotInfoKHR {
    static name: string
}
export class RenderingFlagsKHR {
    static name: string
}
export class RenderingFlagBitsKHR {
    static name: string
}
export class RenderingInfoKHR {
    static name: string
}
export class RenderingAttachmentInfoKHR {
    static name: string
}
export class PipelineRenderingCreateInfoKHR {
    static name: string
}
export class PhysicalDeviceDynamicRenderingFeaturesKHR {
    static name: string
}
export class CommandBufferInheritanceRenderingInfoKHR {
    static name: string
}
export class RenderingFragmentShadingRateAttachmentInfoKHR {
    static name: string
}
export class RenderingFragmentDensityMapAttachmentInfoEXT {
    static name: string
}
export class AttachmentSampleCountInfoAMD {
    static name: string
}
export class AttachmentSampleCountInfoNV {
    static name: string
}
export class MultiviewPerViewAttributesInfoNVX {
    static name: string
}
export class RenderPassMultiviewCreateInfoKHR {
    static name: string
}
export class PhysicalDeviceMultiviewFeaturesKHR {
    static name: string
}
export class PhysicalDeviceMultiviewPropertiesKHR {
    static name: string
}
export class PhysicalDeviceFeatures2KHR {
    static name: string
}
export class PhysicalDeviceProperties2KHR {
    static name: string
}
export class FormatProperties2KHR {
    static name: string
}
export class ImageFormatProperties2KHR {
    static name: string
}
export class PhysicalDeviceImageFormatInfo2KHR {
    static name: string
}
export class QueueFamilyProperties2KHR {
    static name: string
}
export class PhysicalDeviceMemoryProperties2KHR {
    static name: string
}
export class SparseImageFormatProperties2KHR {
    static name: string
}
export class PhysicalDeviceSparseImageFormatInfo2KHR {
    static name: string
}
export class PeerMemoryFeatureFlagsKHR {
    static name: string
}
export class PeerMemoryFeatureFlagBitsKHR {
    static name: string
}
export class MemoryAllocateFlagsKHR {
    static name: string
}
export class MemoryAllocateFlagBitsKHR {
    static name: string
}
export class MemoryAllocateFlagsInfoKHR {
    static name: string
}
export class DeviceGroupRenderPassBeginInfoKHR {
    static name: string
}
export class DeviceGroupCommandBufferBeginInfoKHR {
    static name: string
}
export class DeviceGroupSubmitInfoKHR {
    static name: string
}
export class DeviceGroupBindSparseInfoKHR {
    static name: string
}
export class BindBufferMemoryDeviceGroupInfoKHR {
    static name: string
}
export class BindImageMemoryDeviceGroupInfoKHR {
    static name: string
}
export class CommandPoolTrimFlagsKHR {
    static name: string
}
export class PhysicalDeviceGroupPropertiesKHR {
    static name: string
}
export class DeviceGroupDeviceCreateInfoKHR {
    static name: string
}
export class ExternalMemoryHandleTypeFlagsKHR {
    static name: string
}
export class ExternalMemoryHandleTypeFlagBitsKHR {
    static name: string
}
export class ExternalMemoryFeatureFlagsKHR {
    static name: string
}
export class ExternalMemoryFeatureFlagBitsKHR {
    static name: string
}
export class ExternalMemoryPropertiesKHR {
    static name: string
}
export class PhysicalDeviceExternalImageFormatInfoKHR {
    static name: string
}
export class ExternalImageFormatPropertiesKHR {
    static name: string
}
export class PhysicalDeviceExternalBufferInfoKHR {
    static name: string
}
export class ExternalBufferPropertiesKHR {
    static name: string
}
export class PhysicalDeviceIDPropertiesKHR {
    static name: string
}
export class ExternalMemoryImageCreateInfoKHR {
    static name: string
}
export class ExternalMemoryBufferCreateInfoKHR {
    static name: string
}
export class ExportMemoryAllocateInfoKHR {
    static name: string
}
export class ImportMemoryFdInfoKHR {
    static name: string
}
export class MemoryFdPropertiesKHR {
    static name: string
}
export class MemoryGetFdInfoKHR {
    static name: string
}
export class ExternalSemaphoreHandleTypeFlagsKHR {
    static name: string
}
export class ExternalSemaphoreHandleTypeFlagBitsKHR {
    static name: string
}
export class ExternalSemaphoreFeatureFlagsKHR {
    static name: string
}
export class ExternalSemaphoreFeatureFlagBitsKHR {
    static name: string
}
export class PhysicalDeviceExternalSemaphoreInfoKHR {
    static name: string
}
export class ExternalSemaphorePropertiesKHR {
    static name: string
}
export class SemaphoreImportFlagsKHR {
    static name: string
}
export class SemaphoreImportFlagBitsKHR {
    static name: string
}
export class ExportSemaphoreCreateInfoKHR {
    static name: string
}
export class ImportSemaphoreFdInfoKHR {
    static name: string
}
export class SemaphoreGetFdInfoKHR {
    static name: string
}
export class PhysicalDevicePushDescriptorPropertiesKHR {
    static name: string
}
export class PhysicalDeviceShaderFloat16Int8FeaturesKHR {
    static name: string
}
export class PhysicalDeviceFloat16Int8FeaturesKHR {
    static name: string
}
export class PhysicalDevice16BitStorageFeaturesKHR {
    static name: string
}
export class RectLayerKHR {
    static name: string
}
export class PresentRegionKHR {
    static name: string
}
export class PresentRegionsKHR {
    static name: string
}
export class DescriptorUpdateTemplateKHR {
    static name: string
}
export class DescriptorUpdateTemplateTypeKHR {
    static name: string
}
export class DescriptorUpdateTemplateCreateFlagsKHR {
    static name: string
}
export class DescriptorUpdateTemplateEntryKHR {
    static name: string
}
export class DescriptorUpdateTemplateCreateInfoKHR {
    static name: string
}
export class PhysicalDeviceImagelessFramebufferFeaturesKHR {
    static name: string
}
export class FramebufferAttachmentsCreateInfoKHR {
    static name: string
}
export class FramebufferAttachmentImageInfoKHR {
    static name: string
}
export class RenderPassAttachmentBeginInfoKHR {
    static name: string
}
export class RenderPassCreateInfo2KHR {
    static name: string
}
export class AttachmentDescription2KHR {
    static name: string
}
export class AttachmentReference2KHR {
    static name: string
}
export class SubpassDescription2KHR {
    static name: string
}
export class SubpassDependency2KHR {
    static name: string
}
export class SubpassBeginInfoKHR {
    static name: string
}
export class SubpassEndInfoKHR {
    static name: string
}
export class SharedPresentSurfaceCapabilitiesKHR {
    static name: string
}
export class ExternalFenceHandleTypeFlagsKHR {
    static name: string
}
export class ExternalFenceHandleTypeFlagBitsKHR {
    static name: string
}
export class ExternalFenceFeatureFlagsKHR {
    static name: string
}
export class ExternalFenceFeatureFlagBitsKHR {
    static name: string
}
export class PhysicalDeviceExternalFenceInfoKHR {
    static name: string
}
export class ExternalFencePropertiesKHR {
    static name: string
}
export class FenceImportFlagsKHR {
    static name: string
}
export class FenceImportFlagBitsKHR {
    static name: string
}
export class ExportFenceCreateInfoKHR {
    static name: string
}
export class ImportFenceFdInfoKHR {
    static name: string
}
export class FenceGetFdInfoKHR {
    static name: string
}
export class PerformanceCounterUnitKHR {
    static name: string
}
export class PerformanceCounterScopeKHR {
    static name: string
}
export class PerformanceCounterStorageKHR {
    static name: string
}
export class PerformanceCounterDescriptionFlagBitsKHR {
    static name: string
}
export class PerformanceCounterDescriptionFlagsKHR {
    static name: string
}
export class AcquireProfilingLockFlagBitsKHR {
    static name: string
}
export class AcquireProfilingLockFlagsKHR {
    static name: string
}
export class PhysicalDevicePerformanceQueryFeaturesKHR {
    static name: string
}
export class PhysicalDevicePerformanceQueryPropertiesKHR {
    static name: string
}
export class PerformanceCounterKHR {
    static name: string
}
export class PerformanceCounterDescriptionKHR {
    static name: string
}
export class QueryPoolPerformanceCreateInfoKHR {
    static name: string
}
export class PerformanceCounterResultKHR {
    static name: string
}
export class AcquireProfilingLockInfoKHR {
    static name: string
}
export class PerformanceQuerySubmitInfoKHR {
    static name: string
}
export class PointClippingBehaviorKHR {
    static name: string
}
export class TessellationDomainOriginKHR {
    static name: string
}
export class PhysicalDevicePointClippingPropertiesKHR {
    static name: string
}
export class RenderPassInputAttachmentAspectCreateInfoKHR {
    static name: string
}
export class InputAttachmentAspectReferenceKHR {
    static name: string
}
export class ImageViewUsageCreateInfoKHR {
    static name: string
}
export class PipelineTessellationDomainOriginStateCreateInfoKHR {
    static name: string
}
export class PhysicalDeviceSurfaceInfo2KHR {
    static name: string
}
export class SurfaceCapabilities2KHR {
    static name: string
}
export class SurfaceFormat2KHR {
    static name: string
}
export class PhysicalDeviceVariablePointerFeaturesKHR {
    static name: string
}
export class PhysicalDeviceVariablePointersFeaturesKHR {
    static name: string
}
export class DisplayProperties2KHR {
    static name: string
}
export class DisplayPlaneProperties2KHR {
    static name: string
}
export class DisplayModeProperties2KHR {
    static name: string
}
export class DisplayPlaneInfo2KHR {
    static name: string
}
export class DisplayPlaneCapabilities2KHR {
    static name: string
}
export class MemoryDedicatedRequirementsKHR {
    static name: string
}
export class MemoryDedicatedAllocateInfoKHR {
    static name: string
}
export class BufferMemoryRequirementsInfo2KHR {
    static name: string
}
export class ImageMemoryRequirementsInfo2KHR {
    static name: string
}
export class ImageSparseMemoryRequirementsInfo2KHR {
    static name: string
}
export class MemoryRequirements2KHR {
    static name: string
}
export class SparseImageMemoryRequirements2KHR {
    static name: string
}
export class ImageFormatListCreateInfoKHR {
    static name: string
}
export class SamplerYcbcrConversionKHR {
    static name: string
}
export class SamplerYcbcrModelConversionKHR {
    static name: string
}
export class SamplerYcbcrRangeKHR {
    static name: string
}
export class ChromaLocationKHR {
    static name: string
}
export class SamplerYcbcrConversionCreateInfoKHR {
    static name: string
}
export class SamplerYcbcrConversionInfoKHR {
    static name: string
}
export class BindImagePlaneMemoryInfoKHR {
    static name: string
}
export class ImagePlaneMemoryRequirementsInfoKHR {
    static name: string
}
export class PhysicalDeviceSamplerYcbcrConversionFeaturesKHR {
    static name: string
}
export class SamplerYcbcrConversionImageFormatPropertiesKHR {
    static name: string
}
export class BindBufferMemoryInfoKHR {
    static name: string
}
export class BindImageMemoryInfoKHR {
    static name: string
}
export class PhysicalDeviceMaintenance3PropertiesKHR {
    static name: string
}
export class DescriptorSetLayoutSupportKHR {
    static name: string
}
export class PhysicalDeviceShaderSubgroupExtendedTypesFeaturesKHR {
    static name: string
}
export class PhysicalDevice8BitStorageFeaturesKHR {
    static name: string
}
export class PhysicalDeviceShaderAtomicInt64FeaturesKHR {
    static name: string
}
export class PhysicalDeviceShaderClockFeaturesKHR {
    static name: string
}
export class VideoDecodeH265ProfileInfoKHR {
    static name: string
}
export class VideoDecodeH265CapabilitiesKHR {
    static name: string
}
export class VideoDecodeH265SessionParametersAddInfoKHR {
    static name: string
}
export class VideoDecodeH265SessionParametersCreateInfoKHR {
    static name: string
}
export class VideoDecodeH265PictureInfoKHR {
    static name: string
}
export class VideoDecodeH265DpbSlotInfoKHR {
    static name: string
}
export class QueueGlobalPriorityKHR {
    static name: string
}
export class DeviceQueueGlobalPriorityCreateInfoKHR {
    static name: string
}
export class PhysicalDeviceGlobalPriorityQueryFeaturesKHR {
    static name: string
}
export class QueueFamilyGlobalPriorityPropertiesKHR {
    static name: string
}
export class DriverIdKHR {
    static name: string
}
export class ConformanceVersionKHR {
    static name: string
}
export class PhysicalDeviceDriverPropertiesKHR {
    static name: string
}
export class ShaderFloatControlsIndependenceKHR {
    static name: string
}
export class PhysicalDeviceFloatControlsPropertiesKHR {
    static name: string
}
export class ResolveModeFlagBitsKHR {
    static name: string
}
export class ResolveModeFlagsKHR {
    static name: string
}
export class SubpassDescriptionDepthStencilResolveKHR {
    static name: string
}
export class PhysicalDeviceDepthStencilResolvePropertiesKHR {
    static name: string
}
export class SemaphoreTypeKHR {
    static name: string
}
export class SemaphoreWaitFlagBitsKHR {
    static name: string
}
export class SemaphoreWaitFlagsKHR {
    static name: string
}
export class PhysicalDeviceTimelineSemaphoreFeaturesKHR {
    static name: string
}
export class PhysicalDeviceTimelineSemaphorePropertiesKHR {
    static name: string
}
export class SemaphoreTypeCreateInfoKHR {
    static name: string
}
export class TimelineSemaphoreSubmitInfoKHR {
    static name: string
}
export class SemaphoreWaitInfoKHR {
    static name: string
}
export class SemaphoreSignalInfoKHR {
    static name: string
}
export class PhysicalDeviceVulkanMemoryModelFeaturesKHR {
    static name: string
}
export class PhysicalDeviceShaderTerminateInvocationFeaturesKHR {
    static name: string
}
export class FragmentShadingRateCombinerOpKHR {
    static name: string
}
export class FragmentShadingRateAttachmentInfoKHR {
    static name: string
}
export class PipelineFragmentShadingRateStateCreateInfoKHR {
    static name: string
}
export class PhysicalDeviceFragmentShadingRateFeaturesKHR {
    static name: string
}
export class PhysicalDeviceFragmentShadingRatePropertiesKHR {
    static name: string
}
export class PhysicalDeviceFragmentShadingRateKHR {
    static name: string
}
export class PhysicalDeviceDynamicRenderingLocalReadFeaturesKHR {
    static name: string
}
export class RenderingAttachmentLocationInfoKHR {
    static name: string
}
export class RenderingInputAttachmentIndexInfoKHR {
    static name: string
}
export class PhysicalDeviceShaderQuadControlFeaturesKHR {
    static name: string
}
export class SurfaceProtectedCapabilitiesKHR {
    static name: string
}
export class PhysicalDeviceSeparateDepthStencilLayoutsFeaturesKHR {
    static name: string
}
export class AttachmentReferenceStencilLayoutKHR {
    static name: string
}
export class AttachmentDescriptionStencilLayoutKHR {
    static name: string
}
export class PhysicalDevicePresentWaitFeaturesKHR {
    static name: string
}
export class PhysicalDeviceUniformBufferStandardLayoutFeaturesKHR {
    static name: string
}
export class PhysicalDeviceBufferDeviceAddressFeaturesKHR {
    static name: string
}
export class BufferDeviceAddressInfoKHR {
    static name: string
}
export class BufferOpaqueCaptureAddressCreateInfoKHR {
    static name: string
}
export class MemoryOpaqueCaptureAddressAllocateInfoKHR {
    static name: string
}
export class DeviceMemoryOpaqueCaptureAddressInfoKHR {
    static name: string
}
export class DeferredOperationKHR {
    static name: string
}
export class PipelineExecutableStatisticFormatKHR {
    static name: string
}
export class PhysicalDevicePipelineExecutablePropertiesFeaturesKHR {
    static name: string
}
export class PipelineInfoKHR {
    static name: string
}
export class PipelineExecutablePropertiesKHR {
    static name: string
}
export class PipelineExecutableInfoKHR {
    static name: string
}
export class PipelineExecutableStatisticValueKHR {
    static name: string
}
export class PipelineExecutableStatisticKHR {
    static name: string
}
export class PipelineExecutableInternalRepresentationKHR {
    static name: string
}
export class MemoryUnmapFlagBitsKHR {
    static name: string
}
export class MemoryUnmapFlagsKHR {
    static name: string
}
export class MemoryMapInfoKHR {
    static name: string
}
export class MemoryUnmapInfoKHR {
    static name: string
}
export class PhysicalDeviceShaderIntegerDotProductFeaturesKHR {
    static name: string
}
export class PhysicalDeviceShaderIntegerDotProductPropertiesKHR {
    static name: string
}
export class PipelineLibraryCreateInfoKHR {
    static name: string
}
export class PresentIdKHR {
    static name: string
}
export class PhysicalDevicePresentIdFeaturesKHR {
    static name: string
}
export class VideoEncodeTuningModeKHR {
    static name: string
}
export class VideoEncodeFlagBitsKHR {
    static name: string
}
export class VideoEncodeFlagsKHR {
    static name: string
}
export class VideoEncodeCapabilityFlagBitsKHR {
    static name: string
}
export class VideoEncodeCapabilityFlagsKHR {
    static name: string
}
export class VideoEncodeRateControlModeFlagBitsKHR {
    static name: string
}
export class VideoEncodeRateControlModeFlagsKHR {
    static name: string
}
export class VideoEncodeFeedbackFlagBitsKHR {
    static name: string
}
export class VideoEncodeFeedbackFlagsKHR {
    static name: string
}
export class VideoEncodeUsageFlagBitsKHR {
    static name: string
}
export class VideoEncodeUsageFlagsKHR {
    static name: string
}
export class VideoEncodeContentFlagBitsKHR {
    static name: string
}
export class VideoEncodeContentFlagsKHR {
    static name: string
}
export class VideoEncodeRateControlFlagsKHR {
    static name: string
}
export class VideoEncodeInfoKHR {
    static name: string
}
export class VideoEncodeCapabilitiesKHR {
    static name: string
}
export class QueryPoolVideoEncodeFeedbackCreateInfoKHR {
    static name: string
}
export class VideoEncodeUsageInfoKHR {
    static name: string
}
export class VideoEncodeRateControlLayerInfoKHR {
    static name: string
}
export class VideoEncodeRateControlInfoKHR {
    static name: string
}
export class PhysicalDeviceVideoEncodeQualityLevelInfoKHR {
    static name: string
}
export class VideoEncodeQualityLevelPropertiesKHR {
    static name: string
}
export class VideoEncodeQualityLevelInfoKHR {
    static name: string
}
export class VideoEncodeSessionParametersGetInfoKHR {
    static name: string
}
export class VideoEncodeSessionParametersFeedbackInfoKHR {
    static name: string
}
export class PipelineStageFlags2KHR {
    static name: string
}
export class PipelineStageFlagBits2KHR {
    static name: string
}
export class AccessFlags2KHR {
    static name: string
}
export class AccessFlagBits2KHR {
    static name: string
}
export class SubmitFlagBitsKHR {
    static name: string
}
export class SubmitFlagsKHR {
    static name: string
}
export class MemoryBarrier2KHR {
    static name: string
}
export class BufferMemoryBarrier2KHR {
    static name: string
}
export class ImageMemoryBarrier2KHR {
    static name: string
}
export class DependencyInfoKHR {
    static name: string
}
export class SubmitInfo2KHR {
    static name: string
}
export class SemaphoreSubmitInfoKHR {
    static name: string
}
export class CommandBufferSubmitInfoKHR {
    static name: string
}
export class PhysicalDeviceSynchronization2FeaturesKHR {
    static name: string
}
export class QueueFamilyCheckpointProperties2NV {
    static name: string
}
export class CheckpointData2NV {
    static name: string
}
export class PhysicalDeviceFragmentShaderBarycentricFeaturesKHR {
    static name: string
}
export class PhysicalDeviceFragmentShaderBarycentricPropertiesKHR {
    static name: string
}
export class PhysicalDeviceShaderSubgroupUniformControlFlowFeaturesKHR {
    static name: string
}
export class PhysicalDeviceZeroInitializeWorkgroupMemoryFeaturesKHR {
    static name: string
}
export class PhysicalDeviceWorkgroupMemoryExplicitLayoutFeaturesKHR {
    static name: string
}
export class CopyBufferInfo2KHR {
    static name: string
}
export class CopyImageInfo2KHR {
    static name: string
}
export class CopyBufferToImageInfo2KHR {
    static name: string
}
export class CopyImageToBufferInfo2KHR {
    static name: string
}
export class BlitImageInfo2KHR {
    static name: string
}
export class ResolveImageInfo2KHR {
    static name: string
}
export class BufferCopy2KHR {
    static name: string
}
export class ImageCopy2KHR {
    static name: string
}
export class ImageBlit2KHR {
    static name: string
}
export class BufferImageCopy2KHR {
    static name: string
}
export class ImageResolve2KHR {
    static name: string
}
export class FormatFeatureFlags2KHR {
    static name: string
}
export class FormatFeatureFlagBits2KHR {
    static name: string
}
export class FormatProperties3KHR {
    static name: string
}
export class PhysicalDeviceRayTracingMaintenance1FeaturesKHR {
    static name: string
}
export class TraceRaysIndirectCommand2KHR {
    static name: string
}
export class PhysicalDeviceMaintenance4FeaturesKHR {
    static name: string
}
export class PhysicalDeviceMaintenance4PropertiesKHR {
    static name: string
}
export class DeviceBufferMemoryRequirementsKHR {
    static name: string
}
export class DeviceImageMemoryRequirementsKHR {
    static name: string
}
export class PhysicalDeviceShaderSubgroupRotateFeaturesKHR {
    static name: string
}
export class PhysicalDeviceShaderMaximalReconvergenceFeaturesKHR {
    static name: string
}
export class PipelineCreateFlags2KHR {
    static name: string
}
export class PipelineCreateFlagBits2KHR {
    static name: string
}
export class BufferUsageFlags2KHR {
    static name: string
}
export class BufferUsageFlagBits2KHR {
    static name: string
}
export class PhysicalDeviceMaintenance5FeaturesKHR {
    static name: string
}
export class PhysicalDeviceMaintenance5PropertiesKHR {
    static name: string
}
export class RenderingAreaInfoKHR {
    static name: string
}
export class ImageSubresource2KHR {
    static name: string
}
export class DeviceImageSubresourceInfoKHR {
    static name: string
}
export class SubresourceLayout2KHR {
    static name: string
}
export class PipelineCreateFlags2CreateInfoKHR {
    static name: string
}
export class BufferUsageFlags2CreateInfoKHR {
    static name: string
}
export class PhysicalDeviceRayTracingPositionFetchFeaturesKHR {
    static name: string
}
export class ComponentTypeKHR {
    static name: string
}
export class ScopeKHR {
    static name: string
}
export class CooperativeMatrixPropertiesKHR {
    static name: string
}
export class PhysicalDeviceCooperativeMatrixFeaturesKHR {
    static name: string
}
export class PhysicalDeviceCooperativeMatrixPropertiesKHR {
    static name: string
}
export class VideoDecodeAV1ProfileInfoKHR {
    static name: string
}
export class VideoDecodeAV1CapabilitiesKHR {
    static name: string
}
export class VideoDecodeAV1SessionParametersCreateInfoKHR {
    static name: string
}
export class VideoDecodeAV1PictureInfoKHR {
    static name: string
}
export class VideoDecodeAV1DpbSlotInfoKHR {
    static name: string
}
export class PhysicalDeviceVideoMaintenance1FeaturesKHR {
    static name: string
}
export class VideoInlineQueryInfoKHR {
    static name: string
}
export class PhysicalDeviceVertexAttributeDivisorPropertiesKHR {
    static name: string
}
export class VertexInputBindingDivisorDescriptionKHR {
    static name: string
}
export class PipelineVertexInputDivisorStateCreateInfoKHR {
    static name: string
}
export class PhysicalDeviceVertexAttributeDivisorFeaturesKHR {
    static name: string
}
export class PhysicalDeviceShaderFloatControls2FeaturesKHR {
    static name: string
}
export class PhysicalDeviceIndexTypeUint8FeaturesKHR {
    static name: string
}
export class LineRasterizationModeKHR {
    static name: string
}
export class PhysicalDeviceLineRasterizationFeaturesKHR {
    static name: string
}
export class PhysicalDeviceLineRasterizationPropertiesKHR {
    static name: string
}
export class PipelineRasterizationLineStateCreateInfoKHR {
    static name: string
}
export class TimeDomainKHR {
    static name: string
}
export class CalibratedTimestampInfoKHR {
    static name: string
}
export class PhysicalDeviceShaderExpectAssumeFeaturesKHR {
    static name: string
}
export class PhysicalDeviceMaintenance6FeaturesKHR {
    static name: string
}
export class PhysicalDeviceMaintenance6PropertiesKHR {
    static name: string
}
export class BindMemoryStatusKHR {
    static name: string
}
export class BindDescriptorSetsInfoKHR {
    static name: string
}
export class PushConstantsInfoKHR {
    static name: string
}
export class PushDescriptorSetInfoKHR {
    static name: string
}
export class PushDescriptorSetWithTemplateInfoKHR {
    static name: string
}
export class SetDescriptorBufferOffsetsInfoEXT {
    static name: string
}
export class BindDescriptorBufferEmbeddedSamplersInfoEXT {
    static name: string
}
export class DebugReportCallbackEXT {
    static name: string
}
export class DebugReportObjectTypeEXT {
    static name: string
}
export class DebugReportFlagBitsEXT {
    static name: string
}
export class DebugReportFlagsEXT {
    static name: string
}
export class DebugReportCallbackCreateInfoEXT {
    static name: string
}
export class RasterizationOrderAMD {
    static name: string
}
export class PipelineRasterizationStateRasterizationOrderAMD {
    static name: string
}
export class DebugMarkerObjectNameInfoEXT {
    static name: string
}
export class DebugMarkerObjectTagInfoEXT {
    static name: string
}
export class DebugMarkerMarkerInfoEXT {
    static name: string
}
export class DedicatedAllocationImageCreateInfoNV {
    static name: string
}
export class DedicatedAllocationBufferCreateInfoNV {
    static name: string
}
export class DedicatedAllocationMemoryAllocateInfoNV {
    static name: string
}
export class PipelineRasterizationStateStreamCreateFlagsEXT {
    static name: string
}
export class PhysicalDeviceTransformFeedbackFeaturesEXT {
    static name: string
}
export class PhysicalDeviceTransformFeedbackPropertiesEXT {
    static name: string
}
export class PipelineRasterizationStateStreamCreateInfoEXT {
    static name: string
}
export class CuModuleNVX {
    static name: string
}
export class CuFunctionNVX {
    static name: string
}
export class CuModuleCreateInfoNVX {
    static name: string
}
export class CuFunctionCreateInfoNVX {
    static name: string
}
export class CuLaunchInfoNVX {
    static name: string
}
export class ImageViewHandleInfoNVX {
    static name: string
}
export class ImageViewAddressPropertiesNVX {
    static name: string
}
export class TextureLODGatherFormatPropertiesAMD {
    static name: string
}
export class ShaderInfoTypeAMD {
    static name: string
}
export class ShaderResourceUsageAMD {
    static name: string
}
export class ShaderStatisticsInfoAMD {
    static name: string
}
export class PhysicalDeviceCornerSampledImageFeaturesNV {
    static name: string
}
export class ExternalMemoryHandleTypeFlagBitsNV {
    static name: string
}
export class ExternalMemoryHandleTypeFlagsNV {
    static name: string
}
export class ExternalMemoryFeatureFlagBitsNV {
    static name: string
}
export class ExternalMemoryFeatureFlagsNV {
    static name: string
}
export class ExternalImageFormatPropertiesNV {
    static name: string
}
export class ExternalMemoryImageCreateInfoNV {
    static name: string
}
export class ExportMemoryAllocateInfoNV {
    static name: string
}
export class ValidationCheckEXT {
    static name: string
}
export class ValidationFlagsEXT {
    static name: string
}
export class PhysicalDeviceTextureCompressionASTCHDRFeaturesEXT {
    static name: string
}
export class ImageViewASTCDecodeModeEXT {
    static name: string
}
export class PhysicalDeviceASTCDecodeFeaturesEXT {
    static name: string
}
export class PipelineRobustnessBufferBehaviorEXT {
    static name: string
}
export class PipelineRobustnessImageBehaviorEXT {
    static name: string
}
export class PhysicalDevicePipelineRobustnessFeaturesEXT {
    static name: string
}
export class PhysicalDevicePipelineRobustnessPropertiesEXT {
    static name: string
}
export class PipelineRobustnessCreateInfoEXT {
    static name: string
}
export class ConditionalRenderingFlagBitsEXT {
    static name: string
}
export class ConditionalRenderingFlagsEXT {
    static name: string
}
export class ConditionalRenderingBeginInfoEXT {
    static name: string
}
export class PhysicalDeviceConditionalRenderingFeaturesEXT {
    static name: string
}
export class CommandBufferInheritanceConditionalRenderingInfoEXT {
    static name: string
}
export class ViewportWScalingNV {
    static name: string
}
export class PipelineViewportWScalingStateCreateInfoNV {
    static name: string
}
export class SurfaceCounterFlagBitsEXT {
    static name: string
}
export class SurfaceCounterFlagsEXT {
    static name: string
}
export class SurfaceCapabilities2EXT {
    static name: string
}
export class DisplayPowerStateEXT {
    static name: string
}
export class DeviceEventTypeEXT {
    static name: string
}
export class DisplayEventTypeEXT {
    static name: string
}
export class DisplayPowerInfoEXT {
    static name: string
}
export class DeviceEventInfoEXT {
    static name: string
}
export class DisplayEventInfoEXT {
    static name: string
}
export class SwapchainCounterCreateInfoEXT {
    static name: string
}
export class RefreshCycleDurationGOOGLE {
    static name: string
}
export class PastPresentationTimingGOOGLE {
    static name: string
}
export class PresentTimeGOOGLE {
    static name: string
}
export class PresentTimesInfoGOOGLE {
    static name: string
}
export class PhysicalDeviceMultiviewPerViewAttributesPropertiesNVX {
    static name: string
}
export class ViewportCoordinateSwizzleNV {
    static name: string
}
export class PipelineViewportSwizzleStateCreateFlagsNV {
    static name: string
}
export class ViewportSwizzleNV {
    static name: string
}
export class PipelineViewportSwizzleStateCreateInfoNV {
    static name: string
}
export class DiscardRectangleModeEXT {
    static name: string
}
export class PipelineDiscardRectangleStateCreateFlagsEXT {
    static name: string
}
export class PhysicalDeviceDiscardRectanglePropertiesEXT {
    static name: string
}
export class PipelineDiscardRectangleStateCreateInfoEXT {
    static name: string
}
export class ConservativeRasterizationModeEXT {
    static name: string
}
export class PipelineRasterizationConservativeStateCreateFlagsEXT {
    static name: string
}
export class PhysicalDeviceConservativeRasterizationPropertiesEXT {
    static name: string
}
export class PipelineRasterizationConservativeStateCreateInfoEXT {
    static name: string
}
export class PipelineRasterizationDepthClipStateCreateFlagsEXT {
    static name: string
}
export class PhysicalDeviceDepthClipEnableFeaturesEXT {
    static name: string
}
export class PipelineRasterizationDepthClipStateCreateInfoEXT {
    static name: string
}
export class XYColorEXT {
    static name: string
}
export class HdrMetadataEXT {
    static name: string
}
export class PhysicalDeviceRelaxedLineRasterizationFeaturesIMG {
    static name: string
}
export class DebugUtilsMessengerEXT {
    static name: string
}
export class DebugUtilsMessengerCallbackDataFlagsEXT {
    static name: string
}
export class DebugUtilsMessageSeverityFlagBitsEXT {
    static name: string
}
export class DebugUtilsMessageTypeFlagBitsEXT {
    static name: string
}
export class DebugUtilsMessageTypeFlagsEXT {
    static name: string
}
export class DebugUtilsMessageSeverityFlagsEXT {
    static name: string
}
export class DebugUtilsMessengerCreateFlagsEXT {
    static name: string
}
export class DebugUtilsLabelEXT {
    static name: string
}
export class DebugUtilsObjectNameInfoEXT {
    static name: string
}
export class DebugUtilsMessengerCallbackDataEXT {
    static name: string
}
export class DebugUtilsMessengerCreateInfoEXT {
    static name: string
}
export class DebugUtilsObjectTagInfoEXT {
    static name: string
}
export class SamplerReductionModeEXT {
    static name: string
}
export class SamplerReductionModeCreateInfoEXT {
    static name: string
}
export class PhysicalDeviceSamplerFilterMinmaxPropertiesEXT {
    static name: string
}
export class PhysicalDeviceInlineUniformBlockFeaturesEXT {
    static name: string
}
export class PhysicalDeviceInlineUniformBlockPropertiesEXT {
    static name: string
}
export class WriteDescriptorSetInlineUniformBlockEXT {
    static name: string
}
export class DescriptorPoolInlineUniformBlockCreateInfoEXT {
    static name: string
}
export class SampleLocationEXT {
    static name: string
}
export class SampleLocationsInfoEXT {
    static name: string
}
export class AttachmentSampleLocationsEXT {
    static name: string
}
export class SubpassSampleLocationsEXT {
    static name: string
}
export class RenderPassSampleLocationsBeginInfoEXT {
    static name: string
}
export class PipelineSampleLocationsStateCreateInfoEXT {
    static name: string
}
export class PhysicalDeviceSampleLocationsPropertiesEXT {
    static name: string
}
export class MultisamplePropertiesEXT {
    static name: string
}
export class BlendOverlapEXT {
    static name: string
}
export class PhysicalDeviceBlendOperationAdvancedFeaturesEXT {
    static name: string
}
export class PhysicalDeviceBlendOperationAdvancedPropertiesEXT {
    static name: string
}
export class PipelineColorBlendAdvancedStateCreateInfoEXT {
    static name: string
}
export class PipelineCoverageToColorStateCreateFlagsNV {
    static name: string
}
export class PipelineCoverageToColorStateCreateInfoNV {
    static name: string
}
export class CoverageModulationModeNV {
    static name: string
}
export class PipelineCoverageModulationStateCreateFlagsNV {
    static name: string
}
export class PipelineCoverageModulationStateCreateInfoNV {
    static name: string
}
export class PhysicalDeviceShaderSMBuiltinsPropertiesNV {
    static name: string
}
export class PhysicalDeviceShaderSMBuiltinsFeaturesNV {
    static name: string
}
export class DrmFormatModifierPropertiesEXT {
    static name: string
}
export class DrmFormatModifierPropertiesListEXT {
    static name: string
}
export class PhysicalDeviceImageDrmFormatModifierInfoEXT {
    static name: string
}
export class ImageDrmFormatModifierListCreateInfoEXT {
    static name: string
}
export class ImageDrmFormatModifierExplicitCreateInfoEXT {
    static name: string
}
export class ImageDrmFormatModifierPropertiesEXT {
    static name: string
}
export class DrmFormatModifierProperties2EXT {
    static name: string
}
export class DrmFormatModifierPropertiesList2EXT {
    static name: string
}
export class ValidationCacheEXT {
    static name: string
}
export class ValidationCacheHeaderVersionEXT {
    static name: string
}
export class ValidationCacheCreateFlagsEXT {
    static name: string
}
export class ValidationCacheCreateInfoEXT {
    static name: string
}
export class ShaderModuleValidationCacheCreateInfoEXT {
    static name: string
}
export class DescriptorBindingFlagBitsEXT {
    static name: string
}
export class DescriptorBindingFlagsEXT {
    static name: string
}
export class DescriptorSetLayoutBindingFlagsCreateInfoEXT {
    static name: string
}
export class PhysicalDeviceDescriptorIndexingFeaturesEXT {
    static name: string
}
export class PhysicalDeviceDescriptorIndexingPropertiesEXT {
    static name: string
}
export class DescriptorSetVariableDescriptorCountAllocateInfoEXT {
    static name: string
}
export class DescriptorSetVariableDescriptorCountLayoutSupportEXT {
    static name: string
}
export class ShadingRatePaletteEntryNV {
    static name: string
}
export class CoarseSampleOrderTypeNV {
    static name: string
}
export class ShadingRatePaletteNV {
    static name: string
}
export class PipelineViewportShadingRateImageStateCreateInfoNV {
    static name: string
}
export class PhysicalDeviceShadingRateImageFeaturesNV {
    static name: string
}
export class PhysicalDeviceShadingRateImagePropertiesNV {
    static name: string
}
export class CoarseSampleLocationNV {
    static name: string
}
export class CoarseSampleOrderCustomNV {
    static name: string
}
export class PipelineViewportCoarseSampleOrderStateCreateInfoNV {
    static name: string
}
export class AccelerationStructureNV {
    static name: string
}
export class RayTracingShaderGroupTypeKHR {
    static name: string
}
export class RayTracingShaderGroupTypeNV {
    static name: string
}
export class GeometryTypeKHR {
    static name: string
}
export class GeometryTypeNV {
    static name: string
}
export class AccelerationStructureTypeKHR {
    static name: string
}
export class AccelerationStructureTypeNV {
    static name: string
}
export class CopyAccelerationStructureModeKHR {
    static name: string
}
export class CopyAccelerationStructureModeNV {
    static name: string
}
export class AccelerationStructureMemoryRequirementsTypeNV {
    static name: string
}
export class GeometryFlagBitsKHR {
    static name: string
}
export class GeometryFlagsKHR {
    static name: string
}
export class GeometryFlagsNV {
    static name: string
}
export class GeometryFlagBitsNV {
    static name: string
}
export class GeometryInstanceFlagBitsKHR {
    static name: string
}
export class GeometryInstanceFlagsKHR {
    static name: string
}
export class GeometryInstanceFlagsNV {
    static name: string
}
export class GeometryInstanceFlagBitsNV {
    static name: string
}
export class BuildAccelerationStructureFlagBitsKHR {
    static name: string
}
export class BuildAccelerationStructureFlagsKHR {
    static name: string
}
export class BuildAccelerationStructureFlagsNV {
    static name: string
}
export class BuildAccelerationStructureFlagBitsNV {
    static name: string
}
export class RayTracingShaderGroupCreateInfoNV {
    static name: string
}
export class RayTracingPipelineCreateInfoNV {
    static name: string
}
export class GeometryTrianglesNV {
    static name: string
}
export class GeometryAABBNV {
    static name: string
}
export class GeometryDataNV {
    static name: string
}
export class GeometryNV {
    static name: string
}
export class AccelerationStructureInfoNV {
    static name: string
}
export class AccelerationStructureCreateInfoNV {
    static name: string
}
export class BindAccelerationStructureMemoryInfoNV {
    static name: string
}
export class WriteDescriptorSetAccelerationStructureNV {
    static name: string
}
export class AccelerationStructureMemoryRequirementsInfoNV {
    static name: string
}
export class PhysicalDeviceRayTracingPropertiesNV {
    static name: string
}
export class TransformMatrixKHR {
    static name: string
}
export class TransformMatrixNV {
    static name: string
}
export class AabbPositionsKHR {
    static name: string
}
export class AabbPositionsNV {
    static name: string
}
export class AccelerationStructureInstanceKHR {
    static name: string
}
export class AccelerationStructureInstanceNV {
    static name: string
}
export class PhysicalDeviceRepresentativeFragmentTestFeaturesNV {
    static name: string
}
export class PipelineRepresentativeFragmentTestStateCreateInfoNV {
    static name: string
}
export class PhysicalDeviceImageViewImageFormatInfoEXT {
    static name: string
}
export class FilterCubicImageViewImageFormatPropertiesEXT {
    static name: string
}
export class QueueGlobalPriorityEXT {
    static name: string
}
export class DeviceQueueGlobalPriorityCreateInfoEXT {
    static name: string
}
export class ImportMemoryHostPointerInfoEXT {
    static name: string
}
export class MemoryHostPointerPropertiesEXT {
    static name: string
}
export class PhysicalDeviceExternalMemoryHostPropertiesEXT {
    static name: string
}
export class PipelineCompilerControlFlagBitsAMD {
    static name: string
}
export class PipelineCompilerControlFlagsAMD {
    static name: string
}
export class PipelineCompilerControlCreateInfoAMD {
    static name: string
}
export class TimeDomainEXT {
    static name: string
}
export class CalibratedTimestampInfoEXT {
    static name: string
}
export class PhysicalDeviceShaderCorePropertiesAMD {
    static name: string
}
export class MemoryOverallocationBehaviorAMD {
    static name: string
}
export class DeviceMemoryOverallocationCreateInfoAMD {
    static name: string
}
export class PhysicalDeviceVertexAttributeDivisorPropertiesEXT {
    static name: string
}
export class VertexInputBindingDivisorDescriptionEXT {
    static name: string
}
export class PipelineVertexInputDivisorStateCreateInfoEXT {
    static name: string
}
export class PhysicalDeviceVertexAttributeDivisorFeaturesEXT {
    static name: string
}
export class PipelineCreationFeedbackFlagBitsEXT {
    static name: string
}
export class PipelineCreationFeedbackFlagsEXT {
    static name: string
}
export class PipelineCreationFeedbackCreateInfoEXT {
    static name: string
}
export class PipelineCreationFeedbackEXT {
    static name: string
}
export class PhysicalDeviceComputeShaderDerivativesFeaturesNV {
    static name: string
}
export class PhysicalDeviceMeshShaderFeaturesNV {
    static name: string
}
export class PhysicalDeviceMeshShaderPropertiesNV {
    static name: string
}
export class DrawMeshTasksIndirectCommandNV {
    static name: string
}
export class PhysicalDeviceFragmentShaderBarycentricFeaturesNV {
    static name: string
}
export class PhysicalDeviceShaderImageFootprintFeaturesNV {
    static name: string
}
export class PipelineViewportExclusiveScissorStateCreateInfoNV {
    static name: string
}
export class PhysicalDeviceExclusiveScissorFeaturesNV {
    static name: string
}
export class QueueFamilyCheckpointPropertiesNV {
    static name: string
}
export class CheckpointDataNV {
    static name: string
}
export class PhysicalDeviceShaderIntegerFunctions2FeaturesINTEL {
    static name: string
}
export class PerformanceConfigurationINTEL {
    static name: string
}
export class PerformanceConfigurationTypeINTEL {
    static name: string
}
export class QueryPoolSamplingModeINTEL {
    static name: string
}
export class PerformanceOverrideTypeINTEL {
    static name: string
}
export class PerformanceParameterTypeINTEL {
    static name: string
}
export class PerformanceValueTypeINTEL {
    static name: string
}
export class PerformanceValueDataINTEL {
    static name: string
}
export class PerformanceValueINTEL {
    static name: string
}
export class InitializePerformanceApiInfoINTEL {
    static name: string
}
export class QueryPoolPerformanceQueryCreateInfoINTEL {
    static name: string
}
export class QueryPoolCreateInfoINTEL {
    static name: string
}
export class PerformanceMarkerInfoINTEL {
    static name: string
}
export class PerformanceStreamMarkerInfoINTEL {
    static name: string
}
export class PerformanceOverrideInfoINTEL {
    static name: string
}
export class PerformanceConfigurationAcquireInfoINTEL {
    static name: string
}
export class PhysicalDevicePCIBusInfoPropertiesEXT {
    static name: string
}
export class DisplayNativeHdrSurfaceCapabilitiesAMD {
    static name: string
}
export class SwapchainDisplayNativeHdrCreateInfoAMD {
    static name: string
}
export class PhysicalDeviceFragmentDensityMapFeaturesEXT {
    static name: string
}
export class PhysicalDeviceFragmentDensityMapPropertiesEXT {
    static name: string
}
export class RenderPassFragmentDensityMapCreateInfoEXT {
    static name: string
}
export class PhysicalDeviceScalarBlockLayoutFeaturesEXT {
    static name: string
}
export class PhysicalDeviceSubgroupSizeControlFeaturesEXT {
    static name: string
}
export class PhysicalDeviceSubgroupSizeControlPropertiesEXT {
    static name: string
}
export class PipelineShaderStageRequiredSubgroupSizeCreateInfoEXT {
    static name: string
}
export class ShaderCorePropertiesFlagBitsAMD {
    static name: string
}
export class ShaderCorePropertiesFlagsAMD {
    static name: string
}
export class PhysicalDeviceShaderCoreProperties2AMD {
    static name: string
}
export class PhysicalDeviceCoherentMemoryFeaturesAMD {
    static name: string
}
export class PhysicalDeviceShaderImageAtomicInt64FeaturesEXT {
    static name: string
}
export class PhysicalDeviceMemoryBudgetPropertiesEXT {
    static name: string
}
export class PhysicalDeviceMemoryPriorityFeaturesEXT {
    static name: string
}
export class MemoryPriorityAllocateInfoEXT {
    static name: string
}
export class PhysicalDeviceDedicatedAllocationImageAliasingFeaturesNV {
    static name: string
}
export class PhysicalDeviceBufferDeviceAddressFeaturesEXT {
    static name: string
}
export class PhysicalDeviceBufferAddressFeaturesEXT {
    static name: string
}
export class BufferDeviceAddressInfoEXT {
    static name: string
}
export class BufferDeviceAddressCreateInfoEXT {
    static name: string
}
export class ToolPurposeFlagBitsEXT {
    static name: string
}
export class ToolPurposeFlagsEXT {
    static name: string
}
export class PhysicalDeviceToolPropertiesEXT {
    static name: string
}
export class ImageStencilUsageCreateInfoEXT {
    static name: string
}
export class ValidationFeatureEnableEXT {
    static name: string
}
export class ValidationFeatureDisableEXT {
    static name: string
}
export class ValidationFeaturesEXT {
    static name: string
}
export class ComponentTypeNV {
    static name: string
}
export class ScopeNV {
    static name: string
}
export class CooperativeMatrixPropertiesNV {
    static name: string
}
export class PhysicalDeviceCooperativeMatrixFeaturesNV {
    static name: string
}
export class PhysicalDeviceCooperativeMatrixPropertiesNV {
    static name: string
}
export class CoverageReductionModeNV {
    static name: string
}
export class PipelineCoverageReductionStateCreateFlagsNV {
    static name: string
}
export class PhysicalDeviceCoverageReductionModeFeaturesNV {
    static name: string
}
export class PipelineCoverageReductionStateCreateInfoNV {
    static name: string
}
export class FramebufferMixedSamplesCombinationNV {
    static name: string
}
export class PhysicalDeviceFragmentShaderInterlockFeaturesEXT {
    static name: string
}
export class PhysicalDeviceYcbcrImageArraysFeaturesEXT {
    static name: string
}
export class ProvokingVertexModeEXT {
    static name: string
}
export class PhysicalDeviceProvokingVertexFeaturesEXT {
    static name: string
}
export class PhysicalDeviceProvokingVertexPropertiesEXT {
    static name: string
}
export class PipelineRasterizationProvokingVertexStateCreateInfoEXT {
    static name: string
}
export class HeadlessSurfaceCreateFlagsEXT {
    static name: string
}
export class HeadlessSurfaceCreateInfoEXT {
    static name: string
}
export class LineRasterizationModeEXT {
    static name: string
}
export class PhysicalDeviceLineRasterizationFeaturesEXT {
    static name: string
}
export class PhysicalDeviceLineRasterizationPropertiesEXT {
    static name: string
}
export class PipelineRasterizationLineStateCreateInfoEXT {
    static name: string
}
export class PhysicalDeviceShaderAtomicFloatFeaturesEXT {
    static name: string
}
export class PhysicalDeviceHostQueryResetFeaturesEXT {
    static name: string
}
export class PhysicalDeviceIndexTypeUint8FeaturesEXT {
    static name: string
}
export class PhysicalDeviceExtendedDynamicStateFeaturesEXT {
    static name: string
}
export class HostImageCopyFlagBitsEXT {
    static name: string
}
export class HostImageCopyFlagsEXT {
    static name: string
}
export class PhysicalDeviceHostImageCopyFeaturesEXT {
    static name: string
}
export class PhysicalDeviceHostImageCopyPropertiesEXT {
    static name: string
}
export class MemoryToImageCopyEXT {
    static name: string
}
export class ImageToMemoryCopyEXT {
    static name: string
}
export class CopyMemoryToImageInfoEXT {
    static name: string
}
export class CopyImageToMemoryInfoEXT {
    static name: string
}
export class CopyImageToImageInfoEXT {
    static name: string
}
export class HostImageLayoutTransitionInfoEXT {
    static name: string
}
export class SubresourceHostMemcpySizeEXT {
    static name: string
}
export class HostImageCopyDevicePerformanceQueryEXT {
    static name: string
}
export class SubresourceLayout2EXT {
    static name: string
}
export class ImageSubresource2EXT {
    static name: string
}
export class PhysicalDeviceMapMemoryPlacedFeaturesEXT {
    static name: string
}
export class PhysicalDeviceMapMemoryPlacedPropertiesEXT {
    static name: string
}
export class MemoryMapPlacedInfoEXT {
    static name: string
}
export class PhysicalDeviceShaderAtomicFloat2FeaturesEXT {
    static name: string
}
export class PresentScalingFlagBitsEXT {
    static name: string
}
export class PresentScalingFlagsEXT {
    static name: string
}
export class PresentGravityFlagBitsEXT {
    static name: string
}
export class PresentGravityFlagsEXT {
    static name: string
}
export class SurfacePresentModeEXT {
    static name: string
}
export class SurfacePresentScalingCapabilitiesEXT {
    static name: string
}
export class SurfacePresentModeCompatibilityEXT {
    static name: string
}
export class PhysicalDeviceSwapchainMaintenance1FeaturesEXT {
    static name: string
}
export class SwapchainPresentFenceInfoEXT {
    static name: string
}
export class SwapchainPresentModesCreateInfoEXT {
    static name: string
}
export class SwapchainPresentModeInfoEXT {
    static name: string
}
export class SwapchainPresentScalingCreateInfoEXT {
    static name: string
}
export class ReleaseSwapchainImagesInfoEXT {
    static name: string
}
export class PhysicalDeviceShaderDemoteToHelperInvocationFeaturesEXT {
    static name: string
}
export class IndirectCommandsLayoutNV {
    static name: string
}
export class IndirectCommandsTokenTypeNV {
    static name: string
}
export class IndirectStateFlagBitsNV {
    static name: string
}
export class IndirectStateFlagsNV {
    static name: string
}
export class IndirectCommandsLayoutUsageFlagBitsNV {
    static name: string
}
export class IndirectCommandsLayoutUsageFlagsNV {
    static name: string
}
export class PhysicalDeviceDeviceGeneratedCommandsPropertiesNV {
    static name: string
}
export class PhysicalDeviceDeviceGeneratedCommandsFeaturesNV {
    static name: string
}
export class GraphicsShaderGroupCreateInfoNV {
    static name: string
}
export class GraphicsPipelineShaderGroupsCreateInfoNV {
    static name: string
}
export class BindShaderGroupIndirectCommandNV {
    static name: string
}
export class BindIndexBufferIndirectCommandNV {
    static name: string
}
export class BindVertexBufferIndirectCommandNV {
    static name: string
}
export class SetStateFlagsIndirectCommandNV {
    static name: string
}
export class IndirectCommandsStreamNV {
    static name: string
}
export class IndirectCommandsLayoutTokenNV {
    static name: string
}
export class IndirectCommandsLayoutCreateInfoNV {
    static name: string
}
export class GeneratedCommandsInfoNV {
    static name: string
}
export class GeneratedCommandsMemoryRequirementsInfoNV {
    static name: string
}
export class PhysicalDeviceInheritedViewportScissorFeaturesNV {
    static name: string
}
export class CommandBufferInheritanceViewportScissorInfoNV {
    static name: string
}
export class PhysicalDeviceTexelBufferAlignmentFeaturesEXT {
    static name: string
}
export class PhysicalDeviceTexelBufferAlignmentPropertiesEXT {
    static name: string
}
export class RenderPassTransformBeginInfoQCOM {
    static name: string
}
export class CommandBufferInheritanceRenderPassTransformInfoQCOM {
    static name: string
}
export class DepthBiasRepresentationEXT {
    static name: string
}
export class PhysicalDeviceDepthBiasControlFeaturesEXT {
    static name: string
}
export class DepthBiasInfoEXT {
    static name: string
}
export class DepthBiasRepresentationInfoEXT {
    static name: string
}
export class DeviceMemoryReportEventTypeEXT {
    static name: string
}
export class DeviceMemoryReportFlagsEXT {
    static name: string
}
export class PhysicalDeviceDeviceMemoryReportFeaturesEXT {
    static name: string
}
export class DeviceMemoryReportCallbackDataEXT {
    static name: string
}
export class DeviceDeviceMemoryReportCreateInfoEXT {
    static name: string
}
export class PhysicalDeviceRobustness2FeaturesEXT {
    static name: string
}
export class PhysicalDeviceRobustness2PropertiesEXT {
    static name: string
}
export class SamplerCustomBorderColorCreateInfoEXT {
    static name: string
}
export class PhysicalDeviceCustomBorderColorPropertiesEXT {
    static name: string
}
export class PhysicalDeviceCustomBorderColorFeaturesEXT {
    static name: string
}
export class PhysicalDevicePresentBarrierFeaturesNV {
    static name: string
}
export class SurfaceCapabilitiesPresentBarrierNV {
    static name: string
}
export class SwapchainPresentBarrierCreateInfoNV {
    static name: string
}
export class PrivateDataSlotEXT {
    static name: string
}
export class PrivateDataSlotCreateFlagsEXT {
    static name: string
}
export class PhysicalDevicePrivateDataFeaturesEXT {
    static name: string
}
export class DevicePrivateDataCreateInfoEXT {
    static name: string
}
export class PrivateDataSlotCreateInfoEXT {
    static name: string
}
export class PhysicalDevicePipelineCreationCacheControlFeaturesEXT {
    static name: string
}
export class DeviceDiagnosticsConfigFlagBitsNV {
    static name: string
}
export class DeviceDiagnosticsConfigFlagsNV {
    static name: string
}
export class PhysicalDeviceDiagnosticsConfigFeaturesNV {
    static name: string
}
export class DeviceDiagnosticsConfigCreateInfoNV {
    static name: string
}
export class CudaModuleNV {
    static name: string
}
export class CudaFunctionNV {
    static name: string
}
export class CudaModuleCreateInfoNV {
    static name: string
}
export class CudaFunctionCreateInfoNV {
    static name: string
}
export class CudaLaunchInfoNV {
    static name: string
}
export class PhysicalDeviceCudaKernelLaunchFeaturesNV {
    static name: string
}
export class PhysicalDeviceCudaKernelLaunchPropertiesNV {
    static name: string
}
export class QueryLowLatencySupportNV {
    static name: string
}
export class AccelerationStructureKHR {
    static name: string
}
export class PhysicalDeviceDescriptorBufferPropertiesEXT {
    static name: string
}
export class PhysicalDeviceDescriptorBufferDensityMapPropertiesEXT {
    static name: string
}
export class PhysicalDeviceDescriptorBufferFeaturesEXT {
    static name: string
}
export class DescriptorAddressInfoEXT {
    static name: string
}
export class DescriptorBufferBindingInfoEXT {
    static name: string
}
export class DescriptorBufferBindingPushDescriptorBufferHandleEXT {
    static name: string
}
export class DescriptorDataEXT {
    static name: string
}
export class DescriptorGetInfoEXT {
    static name: string
}
export class BufferCaptureDescriptorDataInfoEXT {
    static name: string
}
export class ImageCaptureDescriptorDataInfoEXT {
    static name: string
}
export class ImageViewCaptureDescriptorDataInfoEXT {
    static name: string
}
export class SamplerCaptureDescriptorDataInfoEXT {
    static name: string
}
export class OpaqueCaptureDescriptorDataCreateInfoEXT {
    static name: string
}
export class AccelerationStructureCaptureDescriptorDataInfoEXT {
    static name: string
}
export class GraphicsPipelineLibraryFlagBitsEXT {
    static name: string
}
export class GraphicsPipelineLibraryFlagsEXT {
    static name: string
}
export class PhysicalDeviceGraphicsPipelineLibraryFeaturesEXT {
    static name: string
}
export class PhysicalDeviceGraphicsPipelineLibraryPropertiesEXT {
    static name: string
}
export class GraphicsPipelineLibraryCreateInfoEXT {
    static name: string
}
export class PhysicalDeviceShaderEarlyAndLateFragmentTestsFeaturesAMD {
    static name: string
}
export class FragmentShadingRateTypeNV {
    static name: string
}
export class FragmentShadingRateNV {
    static name: string
}
export class PhysicalDeviceFragmentShadingRateEnumsFeaturesNV {
    static name: string
}
export class PhysicalDeviceFragmentShadingRateEnumsPropertiesNV {
    static name: string
}
export class PipelineFragmentShadingRateEnumStateCreateInfoNV {
    static name: string
}
export class AccelerationStructureMotionInstanceTypeNV {
    static name: string
}
export class AccelerationStructureMotionInfoFlagsNV {
    static name: string
}
export class AccelerationStructureMotionInstanceFlagsNV {
    static name: string
}
export class DeviceOrHostAddressConstKHR {
    static name: string
}
export class AccelerationStructureGeometryMotionTrianglesDataNV {
    static name: string
}
export class AccelerationStructureMotionInfoNV {
    static name: string
}
export class AccelerationStructureMatrixMotionInstanceNV {
    static name: string
}
export class SRTDataNV {
    static name: string
}
export class AccelerationStructureSRTMotionInstanceNV {
    static name: string
}
export class AccelerationStructureMotionInstanceDataNV {
    static name: string
}
export class AccelerationStructureMotionInstanceNV {
    static name: string
}
export class PhysicalDeviceRayTracingMotionBlurFeaturesNV {
    static name: string
}
export class PhysicalDeviceYcbcr2Plane444FormatsFeaturesEXT {
    static name: string
}
export class PhysicalDeviceFragmentDensityMap2FeaturesEXT {
    static name: string
}
export class PhysicalDeviceFragmentDensityMap2PropertiesEXT {
    static name: string
}
export class CopyCommandTransformInfoQCOM {
    static name: string
}
export class PhysicalDeviceImageRobustnessFeaturesEXT {
    static name: string
}
export class ImageCompressionFlagBitsEXT {
    static name: string
}
export class ImageCompressionFlagsEXT {
    static name: string
}
export class ImageCompressionFixedRateFlagBitsEXT {
    static name: string
}
export class ImageCompressionFixedRateFlagsEXT {
    static name: string
}
export class PhysicalDeviceImageCompressionControlFeaturesEXT {
    static name: string
}
export class ImageCompressionControlEXT {
    static name: string
}
export class ImageCompressionPropertiesEXT {
    static name: string
}
export class PhysicalDeviceAttachmentFeedbackLoopLayoutFeaturesEXT {
    static name: string
}
export class PhysicalDevice4444FormatsFeaturesEXT {
    static name: string
}
export class DeviceFaultAddressTypeEXT {
    static name: string
}
export class DeviceFaultVendorBinaryHeaderVersionEXT {
    static name: string
}
export class PhysicalDeviceFaultFeaturesEXT {
    static name: string
}
export class DeviceFaultCountsEXT {
    static name: string
}
export class DeviceFaultAddressInfoEXT {
    static name: string
}
export class DeviceFaultVendorInfoEXT {
    static name: string
}
export class DeviceFaultInfoEXT {
    static name: string
}
export class DeviceFaultVendorBinaryHeaderVersionOneEXT {
    static name: string
}
export class PhysicalDeviceRasterizationOrderAttachmentAccessFeaturesEXT {
    static name: string
}
export class PhysicalDeviceRasterizationOrderAttachmentAccessFeaturesARM {
    static name: string
}
export class PhysicalDeviceRGBA10X6FormatsFeaturesEXT {
    static name: string
}
export class PhysicalDeviceMutableDescriptorTypeFeaturesEXT {
    static name: string
}
export class PhysicalDeviceMutableDescriptorTypeFeaturesVALVE {
    static name: string
}
export class MutableDescriptorTypeListEXT {
    static name: string
}
export class MutableDescriptorTypeListVALVE {
    static name: string
}
export class MutableDescriptorTypeCreateInfoEXT {
    static name: string
}
export class MutableDescriptorTypeCreateInfoVALVE {
    static name: string
}
export class PhysicalDeviceVertexInputDynamicStateFeaturesEXT {
    static name: string
}
export class VertexInputBindingDescription2EXT {
    static name: string
}
export class VertexInputAttributeDescription2EXT {
    static name: string
}
export class PhysicalDeviceDrmPropertiesEXT {
    static name: string
}
export class DeviceAddressBindingTypeEXT {
    static name: string
}
export class DeviceAddressBindingFlagBitsEXT {
    static name: string
}
export class DeviceAddressBindingFlagsEXT {
    static name: string
}
export class PhysicalDeviceAddressBindingReportFeaturesEXT {
    static name: string
}
export class DeviceAddressBindingCallbackDataEXT {
    static name: string
}
export class PhysicalDeviceDepthClipControlFeaturesEXT {
    static name: string
}
export class PipelineViewportDepthClipControlCreateInfoEXT {
    static name: string
}
export class PhysicalDevicePrimitiveTopologyListRestartFeaturesEXT {
    static name: string
}
export class SubpassShadingPipelineCreateInfoHUAWEI {
    static name: string
}
export class PhysicalDeviceSubpassShadingFeaturesHUAWEI {
    static name: string
}
export class PhysicalDeviceSubpassShadingPropertiesHUAWEI {
    static name: string
}
export class PhysicalDeviceInvocationMaskFeaturesHUAWEI {
    static name: string
}
export class RemoteAddressNV {
    static name: string
}
export class MemoryGetRemoteAddressInfoNV {
    static name: string
}
export class PhysicalDeviceExternalMemoryRDMAFeaturesNV {
    static name: string
}
export class PipelineInfoEXT {
    static name: string
}
export class PipelinePropertiesIdentifierEXT {
    static name: string
}
export class PhysicalDevicePipelinePropertiesFeaturesEXT {
    static name: string
}
export class FrameBoundaryFlagBitsEXT {
    static name: string
}
export class FrameBoundaryFlagsEXT {
    static name: string
}
export class PhysicalDeviceFrameBoundaryFeaturesEXT {
    static name: string
}
export class FrameBoundaryEXT {
    static name: string
}
export class PhysicalDeviceMultisampledRenderToSingleSampledFeaturesEXT {
    static name: string
}
export class SubpassResolvePerformanceQueryEXT {
    static name: string
}
export class MultisampledRenderToSingleSampledInfoEXT {
    static name: string
}
export class PhysicalDeviceExtendedDynamicState2FeaturesEXT {
    static name: string
}
export class PhysicalDeviceColorWriteEnableFeaturesEXT {
    static name: string
}
export class PipelineColorWriteCreateInfoEXT {
    static name: string
}
export class PhysicalDevicePrimitivesGeneratedQueryFeaturesEXT {
    static name: string
}
export class PhysicalDeviceGlobalPriorityQueryFeaturesEXT {
    static name: string
}
export class QueueFamilyGlobalPriorityPropertiesEXT {
    static name: string
}
export class PhysicalDeviceImageViewMinLodFeaturesEXT {
    static name: string
}
export class ImageViewMinLodCreateInfoEXT {
    static name: string
}
export class PhysicalDeviceMultiDrawFeaturesEXT {
    static name: string
}
export class PhysicalDeviceMultiDrawPropertiesEXT {
    static name: string
}
export class MultiDrawInfoEXT {
    static name: string
}
export class MultiDrawIndexedInfoEXT {
    static name: string
}
export class PhysicalDeviceImage2DViewOf3DFeaturesEXT {
    static name: string
}
export class PhysicalDeviceShaderTileImageFeaturesEXT {
    static name: string
}
export class PhysicalDeviceShaderTileImagePropertiesEXT {
    static name: string
}
export class MicromapEXT {
    static name: string
}
export class MicromapTypeEXT {
    static name: string
}
export class BuildMicromapModeEXT {
    static name: string
}
export class CopyMicromapModeEXT {
    static name: string
}
export class OpacityMicromapFormatEXT {
    static name: string
}
export class OpacityMicromapSpecialIndexEXT {
    static name: string
}
export class AccelerationStructureCompatibilityKHR {
    static name: string
}
export class AccelerationStructureBuildTypeKHR {
    static name: string
}
export class BuildMicromapFlagBitsEXT {
    static name: string
}
export class BuildMicromapFlagsEXT {
    static name: string
}
export class MicromapCreateFlagBitsEXT {
    static name: string
}
export class MicromapCreateFlagsEXT {
    static name: string
}
export class MicromapUsageEXT {
    static name: string
}
export class DeviceOrHostAddressKHR {
    static name: string
}
export class MicromapBuildInfoEXT {
    static name: string
}
export class MicromapCreateInfoEXT {
    static name: string
}
export class PhysicalDeviceOpacityMicromapFeaturesEXT {
    static name: string
}
export class PhysicalDeviceOpacityMicromapPropertiesEXT {
    static name: string
}
export class MicromapVersionInfoEXT {
    static name: string
}
export class CopyMicromapToMemoryInfoEXT {
    static name: string
}
export class CopyMemoryToMicromapInfoEXT {
    static name: string
}
export class CopyMicromapInfoEXT {
    static name: string
}
export class MicromapBuildSizesInfoEXT {
    static name: string
}
export class AccelerationStructureTrianglesOpacityMicromapEXT {
    static name: string
}
export class MicromapTriangleEXT {
    static name: string
}
export class PhysicalDeviceClusterCullingShaderFeaturesHUAWEI {
    static name: string
}
export class PhysicalDeviceClusterCullingShaderPropertiesHUAWEI {
    static name: string
}
export class PhysicalDeviceClusterCullingShaderVrsFeaturesHUAWEI {
    static name: string
}
export class PhysicalDeviceBorderColorSwizzleFeaturesEXT {
    static name: string
}
export class SamplerBorderColorComponentMappingCreateInfoEXT {
    static name: string
}
export class PhysicalDevicePageableDeviceLocalMemoryFeaturesEXT {
    static name: string
}
export class PhysicalDeviceShaderCorePropertiesARM {
    static name: string
}
export class PhysicalDeviceSchedulingControlsFlagsARM {
    static name: string
}
export class PhysicalDeviceSchedulingControlsFlagBitsARM {
    static name: string
}
export class DeviceQueueShaderCoreControlCreateInfoARM {
    static name: string
}
export class PhysicalDeviceSchedulingControlsFeaturesARM {
    static name: string
}
export class PhysicalDeviceSchedulingControlsPropertiesARM {
    static name: string
}
export class PhysicalDeviceImageSlicedViewOf3DFeaturesEXT {
    static name: string
}
export class ImageViewSlicedCreateInfoEXT {
    static name: string
}
export class PhysicalDeviceDescriptorSetHostMappingFeaturesVALVE {
    static name: string
}
export class DescriptorSetBindingReferenceVALVE {
    static name: string
}
export class DescriptorSetLayoutHostMappingInfoVALVE {
    static name: string
}
export class PhysicalDeviceDepthClampZeroOneFeaturesEXT {
    static name: string
}
export class PhysicalDeviceNonSeamlessCubeMapFeaturesEXT {
    static name: string
}
export class PhysicalDeviceRenderPassStripedFeaturesARM {
    static name: string
}
export class PhysicalDeviceRenderPassStripedPropertiesARM {
    static name: string
}
export class RenderPassStripeInfoARM {
    static name: string
}
export class RenderPassStripeBeginInfoARM {
    static name: string
}
export class RenderPassStripeSubmitInfoARM {
    static name: string
}
export class PhysicalDeviceFragmentDensityMapOffsetFeaturesQCOM {
    static name: string
}
export class PhysicalDeviceFragmentDensityMapOffsetPropertiesQCOM {
    static name: string
}
export class SubpassFragmentDensityMapOffsetEndInfoQCOM {
    static name: string
}
export class CopyMemoryIndirectCommandNV {
    static name: string
}
export class CopyMemoryToImageIndirectCommandNV {
    static name: string
}
export class PhysicalDeviceCopyMemoryIndirectFeaturesNV {
    static name: string
}
export class PhysicalDeviceCopyMemoryIndirectPropertiesNV {
    static name: string
}
export class MemoryDecompressionMethodFlagBitsNV {
    static name: string
}
export class MemoryDecompressionMethodFlagsNV {
    static name: string
}
export class DecompressMemoryRegionNV {
    static name: string
}
export class PhysicalDeviceMemoryDecompressionFeaturesNV {
    static name: string
}
export class PhysicalDeviceMemoryDecompressionPropertiesNV {
    static name: string
}
export class PhysicalDeviceDeviceGeneratedCommandsComputeFeaturesNV {
    static name: string
}
export class ComputePipelineIndirectBufferInfoNV {
    static name: string
}
export class PipelineIndirectDeviceAddressInfoNV {
    static name: string
}
export class BindPipelineIndirectCommandNV {
    static name: string
}
export class PhysicalDeviceLinearColorAttachmentFeaturesNV {
    static name: string
}
export class PhysicalDeviceImageCompressionControlSwapchainFeaturesEXT {
    static name: string
}
export class ImageViewSampleWeightCreateInfoQCOM {
    static name: string
}
export class PhysicalDeviceImageProcessingFeaturesQCOM {
    static name: string
}
export class PhysicalDeviceImageProcessingPropertiesQCOM {
    static name: string
}
export class PhysicalDeviceNestedCommandBufferFeaturesEXT {
    static name: string
}
export class PhysicalDeviceNestedCommandBufferPropertiesEXT {
    static name: string
}
export class ExternalMemoryAcquireUnmodifiedEXT {
    static name: string
}
export class PhysicalDeviceExtendedDynamicState3FeaturesEXT {
    static name: string
}
export class PhysicalDeviceExtendedDynamicState3PropertiesEXT {
    static name: string
}
export class ColorBlendEquationEXT {
    static name: string
}
export class ColorBlendAdvancedEXT {
    static name: string
}
export class SubpassMergeStatusEXT {
    static name: string
}
export class PhysicalDeviceSubpassMergeFeedbackFeaturesEXT {
    static name: string
}
export class RenderPassCreationControlEXT {
    static name: string
}
export class RenderPassCreationFeedbackInfoEXT {
    static name: string
}
export class RenderPassCreationFeedbackCreateInfoEXT {
    static name: string
}
export class RenderPassSubpassFeedbackInfoEXT {
    static name: string
}
export class RenderPassSubpassFeedbackCreateInfoEXT {
    static name: string
}
export class DirectDriverLoadingModeLUNARG {
    static name: string
}
export class DirectDriverLoadingFlagsLUNARG {
    static name: string
}
export class DirectDriverLoadingInfoLUNARG {
    static name: string
}
export class DirectDriverLoadingListLUNARG {
    static name: string
}
export class PhysicalDeviceShaderModuleIdentifierFeaturesEXT {
    static name: string
}
export class PhysicalDeviceShaderModuleIdentifierPropertiesEXT {
    static name: string
}
export class PipelineShaderStageModuleIdentifierCreateInfoEXT {
    static name: string
}
export class ShaderModuleIdentifierEXT {
    static name: string
}
export class OpticalFlowSessionNV {
    static name: string
}
export class OpticalFlowPerformanceLevelNV {
    static name: string
}
export class OpticalFlowSessionBindingPointNV {
    static name: string
}
export class OpticalFlowGridSizeFlagBitsNV {
    static name: string
}
export class OpticalFlowGridSizeFlagsNV {
    static name: string
}
export class OpticalFlowUsageFlagBitsNV {
    static name: string
}
export class OpticalFlowUsageFlagsNV {
    static name: string
}
export class OpticalFlowSessionCreateFlagBitsNV {
    static name: string
}
export class OpticalFlowSessionCreateFlagsNV {
    static name: string
}
export class OpticalFlowExecuteFlagBitsNV {
    static name: string
}
export class OpticalFlowExecuteFlagsNV {
    static name: string
}
export class PhysicalDeviceOpticalFlowFeaturesNV {
    static name: string
}
export class PhysicalDeviceOpticalFlowPropertiesNV {
    static name: string
}
export class OpticalFlowImageFormatInfoNV {
    static name: string
}
export class OpticalFlowImageFormatPropertiesNV {
    static name: string
}
export class OpticalFlowSessionCreateInfoNV {
    static name: string
}
export class OpticalFlowSessionCreatePrivateDataInfoNV {
    static name: string
}
export class OpticalFlowExecuteInfoNV {
    static name: string
}
export class PhysicalDeviceLegacyDitheringFeaturesEXT {
    static name: string
}
export class PhysicalDevicePipelineProtectedAccessFeaturesEXT {
    static name: string
}
export class ShaderEXT {
    static name: string
}
export class ShaderCodeTypeEXT {
    static name: string
}
export class ShaderCreateFlagBitsEXT {
    static name: string
}
export class ShaderCreateFlagsEXT {
    static name: string
}
export class PhysicalDeviceShaderObjectFeaturesEXT {
    static name: string
}
export class PhysicalDeviceShaderObjectPropertiesEXT {
    static name: string
}
export class ShaderCreateInfoEXT {
    static name: string
}
export class ShaderRequiredSubgroupSizeCreateInfoEXT {
    static name: string
}
export class PhysicalDeviceTilePropertiesFeaturesQCOM {
    static name: string
}
export class TilePropertiesQCOM {
    static name: string
}
export class PhysicalDeviceAmigoProfilingFeaturesSEC {
    static name: string
}
export class AmigoProfilingSubmitInfoSEC {
    static name: string
}
export class PhysicalDeviceMultiviewPerViewViewportsFeaturesQCOM {
    static name: string
}
export class RayTracingInvocationReorderModeNV {
    static name: string
}
export class PhysicalDeviceRayTracingInvocationReorderPropertiesNV {
    static name: string
}
export class PhysicalDeviceRayTracingInvocationReorderFeaturesNV {
    static name: string
}
export class PhysicalDeviceExtendedSparseAddressSpaceFeaturesNV {
    static name: string
}
export class PhysicalDeviceExtendedSparseAddressSpacePropertiesNV {
    static name: string
}
export class PhysicalDeviceLegacyVertexAttributesFeaturesEXT {
    static name: string
}
export class PhysicalDeviceLegacyVertexAttributesPropertiesEXT {
    static name: string
}
export class LayerSettingTypeEXT {
    static name: string
}
export class LayerSettingEXT {
    static name: string
}
export class LayerSettingsCreateInfoEXT {
    static name: string
}
export class PhysicalDeviceShaderCoreBuiltinsFeaturesARM {
    static name: string
}
export class PhysicalDeviceShaderCoreBuiltinsPropertiesARM {
    static name: string
}
export class PhysicalDevicePipelineLibraryGroupHandlesFeaturesEXT {
    static name: string
}
export class PhysicalDeviceDynamicRenderingUnusedAttachmentsFeaturesEXT {
    static name: string
}
export class LatencyMarkerNV {
    static name: string
}
export class OutOfBandQueueTypeNV {
    static name: string
}
export class LatencySleepModeInfoNV {
    static name: string
}
export class LatencySleepInfoNV {
    static name: string
}
export class SetLatencyMarkerInfoNV {
    static name: string
}
export class LatencyTimingsFrameReportNV {
    static name: string
}
export class GetLatencyMarkerInfoNV {
    static name: string
}
export class LatencySubmissionPresentIdNV {
    static name: string
}
export class SwapchainLatencyCreateInfoNV {
    static name: string
}
export class OutOfBandQueueTypeInfoNV {
    static name: string
}
export class LatencySurfaceCapabilitiesNV {
    static name: string
}
export class PhysicalDeviceMultiviewPerViewRenderAreasFeaturesQCOM {
    static name: string
}
export class MultiviewPerViewRenderAreasRenderPassBeginInfoQCOM {
    static name: string
}
export class PhysicalDevicePerStageDescriptorSetFeaturesNV {
    static name: string
}
export class BlockMatchWindowCompareModeQCOM {
    static name: string
}
export class PhysicalDeviceImageProcessing2FeaturesQCOM {
    static name: string
}
export class PhysicalDeviceImageProcessing2PropertiesQCOM {
    static name: string
}
export class SamplerBlockMatchWindowCreateInfoQCOM {
    static name: string
}
export class CubicFilterWeightsQCOM {
    static name: string
}
export class PhysicalDeviceCubicWeightsFeaturesQCOM {
    static name: string
}
export class SamplerCubicWeightsCreateInfoQCOM {
    static name: string
}
export class BlitImageCubicWeightsInfoQCOM {
    static name: string
}
export class PhysicalDeviceYcbcrDegammaFeaturesQCOM {
    static name: string
}
export class SamplerYcbcrConversionYcbcrDegammaCreateInfoQCOM {
    static name: string
}
export class PhysicalDeviceCubicClampFeaturesQCOM {
    static name: string
}
export class PhysicalDeviceAttachmentFeedbackLoopDynamicStateFeaturesEXT {
    static name: string
}
export class LayeredDriverUnderlyingApiMSFT {
    static name: string
}
export class PhysicalDeviceLayeredDriverPropertiesMSFT {
    static name: string
}
export class PhysicalDeviceDescriptorPoolOverallocationFeaturesNV {
    static name: string
}
export class PhysicalDeviceRawAccessChainsFeaturesNV {
    static name: string
}
export class PhysicalDeviceShaderAtomicFloat16VectorFeaturesNV {
    static name: string
}
export class PhysicalDeviceRayTracingValidationFeaturesNV {
    static name: string
}
export class PhysicalDeviceImageAlignmentControlFeaturesMESA {
    static name: string
}
export class PhysicalDeviceImageAlignmentControlPropertiesMESA {
    static name: string
}
export class ImageAlignmentControlCreateInfoMESA {
    static name: string
}
export class BuildAccelerationStructureModeKHR {
    static name: string
}
export class AccelerationStructureCreateFlagBitsKHR {
    static name: string
}
export class AccelerationStructureCreateFlagsKHR {
    static name: string
}
export class AccelerationStructureBuildRangeInfoKHR {
    static name: string
}
export class AccelerationStructureGeometryTrianglesDataKHR {
    static name: string
}
export class AccelerationStructureGeometryAabbsDataKHR {
    static name: string
}
export class AccelerationStructureGeometryInstancesDataKHR {
    static name: string
}
export class AccelerationStructureGeometryDataKHR {
    static name: string
}
export class AccelerationStructureGeometryKHR {
    static name: string
}
export class AccelerationStructureBuildGeometryInfoKHR {
    static name: string
}
export class AccelerationStructureCreateInfoKHR {
    static name: string
}
export class WriteDescriptorSetAccelerationStructureKHR {
    static name: string
}
export class PhysicalDeviceAccelerationStructureFeaturesKHR {
    static name: string
}
export class PhysicalDeviceAccelerationStructurePropertiesKHR {
    static name: string
}
export class AccelerationStructureDeviceAddressInfoKHR {
    static name: string
}
export class AccelerationStructureVersionInfoKHR {
    static name: string
}
export class CopyAccelerationStructureToMemoryInfoKHR {
    static name: string
}
export class CopyMemoryToAccelerationStructureInfoKHR {
    static name: string
}
export class CopyAccelerationStructureInfoKHR {
    static name: string
}
export class AccelerationStructureBuildSizesInfoKHR {
    static name: string
}
export class ShaderGroupShaderKHR {
    static name: string
}
export class RayTracingShaderGroupCreateInfoKHR {
    static name: string
}
export class RayTracingPipelineInterfaceCreateInfoKHR {
    static name: string
}
export class RayTracingPipelineCreateInfoKHR {
    static name: string
}
export class PhysicalDeviceRayTracingPipelineFeaturesKHR {
    static name: string
}
export class PhysicalDeviceRayTracingPipelinePropertiesKHR {
    static name: string
}
export class StridedDeviceAddressRegionKHR {
    static name: string
}
export class TraceRaysIndirectCommandKHR {
    static name: string
}
export class PhysicalDeviceRayQueryFeaturesKHR {
    static name: string
}
export class PhysicalDeviceMeshShaderFeaturesEXT {
    static name: string
}
export class PhysicalDeviceMeshShaderPropertiesEXT {
    static name: string
}
export class DrawMeshTasksIndirectCommandEXT {
    static name: string
}
}