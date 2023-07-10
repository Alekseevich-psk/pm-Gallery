import { Options } from '../types/options';

export default function positionPreviews(wrapper: Element, options: Options) {
    if (!options.positionPreviews) return;
    if (options.positionPreviews === 'horizontalBottom') wrapper.classList.add('horizontal-bottom');
    if (options.positionPreviews === 'horizontalTop') wrapper.classList.add('horizontal-top');
    if (options.positionPreviews === 'verticalRight') wrapper.classList.add('vertical-right');
}