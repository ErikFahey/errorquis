export class RandomUtils {

    public static ALPHA_RANGE = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    public static NUM_RANGE = '0123456789';
    public static ALPHA_NUM_RANGE = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    public static randomChar(range: string): string {
        if (!range) return null;
        return range.charAt(Math.random() * range.length);
    }

    public static randomWord(range: string, size: number): string {
        if (!range || !size || size < 0) return null;

        let chunk = '';
        for (let i = 0; i < size; i++) {
            chunk += RandomUtils.randomChar(range);
        }
        return chunk;
    }

}