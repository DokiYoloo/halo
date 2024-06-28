/* tslint:disable */
/* eslint-disable */
/**
 * Halo
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.17.0-SNAPSHOT
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { DashboardStats } from '../models';
// @ts-ignore
import { SystemInitializationRequest } from '../models';
/**
 * SystemV1alpha1ConsoleApi - axios parameter creator
 * @export
 */
export const SystemV1alpha1ConsoleApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get stats.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStats: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/api.console.halo.run/v1alpha1/stats`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Initialize system
         * @param {SystemInitializationRequest} [systemInitializationRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        initialize: async (systemInitializationRequest?: SystemInitializationRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/api.console.halo.run/v1alpha1/system/initialize`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(systemInitializationRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SystemV1alpha1ConsoleApi - functional programming interface
 * @export
 */
export const SystemV1alpha1ConsoleApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SystemV1alpha1ConsoleApiAxiosParamCreator(configuration)
    return {
        /**
         * Get stats.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getStats(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DashboardStats>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getStats(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SystemV1alpha1ConsoleApi.getStats']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Initialize system
         * @param {SystemInitializationRequest} [systemInitializationRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async initialize(systemInitializationRequest?: SystemInitializationRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.initialize(systemInitializationRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SystemV1alpha1ConsoleApi.initialize']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SystemV1alpha1ConsoleApi - factory interface
 * @export
 */
export const SystemV1alpha1ConsoleApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SystemV1alpha1ConsoleApiFp(configuration)
    return {
        /**
         * Get stats.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStats(options?: RawAxiosRequestConfig): AxiosPromise<DashboardStats> {
            return localVarFp.getStats(options).then((request) => request(axios, basePath));
        },
        /**
         * Initialize system
         * @param {SystemV1alpha1ConsoleApiInitializeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        initialize(requestParameters: SystemV1alpha1ConsoleApiInitializeRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.initialize(requestParameters.systemInitializationRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for initialize operation in SystemV1alpha1ConsoleApi.
 * @export
 * @interface SystemV1alpha1ConsoleApiInitializeRequest
 */
export interface SystemV1alpha1ConsoleApiInitializeRequest {
    /**
     * 
     * @type {SystemInitializationRequest}
     * @memberof SystemV1alpha1ConsoleApiInitialize
     */
    readonly systemInitializationRequest?: SystemInitializationRequest
}

/**
 * SystemV1alpha1ConsoleApi - object-oriented interface
 * @export
 * @class SystemV1alpha1ConsoleApi
 * @extends {BaseAPI}
 */
export class SystemV1alpha1ConsoleApi extends BaseAPI {
    /**
     * Get stats.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemV1alpha1ConsoleApi
     */
    public getStats(options?: RawAxiosRequestConfig) {
        return SystemV1alpha1ConsoleApiFp(this.configuration).getStats(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Initialize system
     * @param {SystemV1alpha1ConsoleApiInitializeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemV1alpha1ConsoleApi
     */
    public initialize(requestParameters: SystemV1alpha1ConsoleApiInitializeRequest = {}, options?: RawAxiosRequestConfig) {
        return SystemV1alpha1ConsoleApiFp(this.configuration).initialize(requestParameters.systemInitializationRequest, options).then((request) => request(this.axios, this.basePath));
    }
}
