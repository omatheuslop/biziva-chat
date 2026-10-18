import type * as Native from './actions';
import { DEFAULT_MCP_CONFIG } from './types';

// Static public hosting cannot launch Node/stdio MCP servers. The original
// implementation remains available in standalone builds of the complete repo.
const unavailable = async () => { throw new Error('MCP de servidor não está configurado nesta hospedagem.'); };
export const isMcpEnabled: typeof Native.isMcpEnabled = async () => false;
export const getClientsStatus: typeof Native.getClientsStatus = async () => ({});
export const getClientTools: typeof Native.getClientTools = async () => null;
export const getAvailableClientsCount: typeof Native.getAvailableClientsCount = async () => 0;
export const getAllTools: typeof Native.getAllTools = async () => [];
export const initializeMcpSystem: typeof Native.initializeMcpSystem = async () => DEFAULT_MCP_CONFIG;
export const getMcpConfigFromFile: typeof Native.getMcpConfigFromFile = async () => DEFAULT_MCP_CONFIG;
export const addMcpServer: typeof Native.addMcpServer = unavailable;
export const pauseMcpServer: typeof Native.pauseMcpServer = unavailable;
export const resumeMcpServer: typeof Native.resumeMcpServer = unavailable;
export const removeMcpServer: typeof Native.removeMcpServer = unavailable;
export const restartAllClients: typeof Native.restartAllClients = unavailable;
export const executeMcpAction: typeof Native.executeMcpAction = unavailable;
