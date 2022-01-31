/**
 * Lockstep Software Development Kit for JavaScript / TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Ted Spence <tspence@lockstep.io>
 * @copyright  2021-2021 Lockstep, Inc.
 * @version    2021.39
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */

/**
 * Represents a failed request.
 */
export class ErrorResult {
    type?: string;
    title?: string;
    status?: number;
    detail?: string;
    instance?: string;
}

/**
 * Not intended to be used
 */
export class TestTimeoutException extends ErrorResult {
}