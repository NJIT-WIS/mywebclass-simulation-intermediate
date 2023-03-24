function Footer() {
  return (
    <div>
      <footer class="ml-72 py-5 container">
        <div class="grid grid-cols-1 sm:grid-cols-3">
          <div>
            <h5 class="text-lg font-bold mb-4">About Us</h5>
            <ul class="flex flex-col gap-1">
              <li class="mb-2">
                <a href="story.html" class="text-gray-500 hover:text-gray-800">
                  Our Story
                </a>
              </li>
              <li class="mb-2">
                <a
                  href="privacy.html"
                  class="text-gray-500 hover:text-gray-800"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div class="sm:col-span-1">
            <h5 class="text-lg font-bold mb-4">Share on Social Media</h5>
            <ul class="flex flex-row gap-2">
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-800">
                  <i class="bi bi-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-800">
                  <i class="bi bi-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-800">
                  <i class="bi bi-facebook"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="sm:col-span-1">
            <form>
              <h5 class="text-lg font-bold mb-4">
                Subscribe to our newsletter
              </h5>
              <p class="mb-4">
                Monthly digest of what's new and exciting from us.
              </p>
              <div class="flex flex-col sm:flex-row gap-2">
                <label for="newsletter1" class="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  class="py-2 px-4 border rounded w-full"
                  placeholder="Email address"
                />
                <button
                  class="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded"
                  type="button"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
