import { Options } from '../types/options';

export default function objectFit(wrapper: Element, options: Options) {

    (options.objectFit && checkClass(options.objectFit)) ?
        wrapper.querySelector('.pm-gallery__main-picture').classList.add(options.objectFit) :
        console.error(`Unknown value "objectFit": ${options.objectFit}`);

    function checkClass(option: string) {
        const values: string[] = ['cover', 'contain', 'fill', 'none', 'scaleDown'];
        
        for (let index = 0; index < values.length; index++) {
            if (values[index] === option) return true;
        }
    }

}