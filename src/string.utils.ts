export class StringUtils {

    public static isEmpty(val: string) {
        return val == null || val.length == 0;
    }

    public static fromBuffer(entry: Buffer | string, encoding = 'utf8'): string {
        if (!entry || typeof entry === 'string') {
            return entry as string;
        }

        return entry.toString(encoding);
    }
}