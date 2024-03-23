import * as FS from 'fs';
import {StringUtils} from '../string.utils';
import {promises} from 'fs';

/**
 * Classe permettant de gerer les fichiers
 */
export class FileNodeUtils {

    /**
     * Chargement d'un fichier json en objet
     * @param fileUrl
     * @param options
     */
    public static loadJson<T>(fileUrl: string, options: { encoding: string; flag?: string; } | string = 'utf8'): Promise<T> {
        return FS.promises.readFile(fileUrl, options).then(
            b => JSON.parse(StringUtils.fromBuffer(b)) as T
        );
    }

    /**
     * Ecriture d'un fichier depuis des données json
     * @param fileUrl
     * @param data
     */
    public static writeJson(fileUrl: string, data: any, options?: { encoding?: string | null, mode?: string | number, flag?: string | number } | string | null): Promise<void> {
        return FS.promises.writeFile(fileUrl, JSON.stringify(data, null, 2), options);
    }

    /**
     * Verifie si le fichier existe
     * @param url
     */
    public static async fileExist(url: string): Promise<boolean> {
        try {
            const fileStat = await promises.stat(url);
            return fileStat.isFile();
        } catch (e) {
            return false;
        }
    }

    /**
     * Verifie si le repertoire existe
     * @param url
     */
    public static async directoryExist(url: string): Promise<boolean> {
        try {
            const fileStat = await promises.stat(url);
            return fileStat.isDirectory();
        } catch (e) {
            return false;
        }
    }
}
