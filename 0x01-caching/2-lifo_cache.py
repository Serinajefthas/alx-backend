#!/usr/bin/env python3

"""LIFO cache module"""


from base_caching import BaseCaching


class LIFOCache(BaseCaching):
    """LIFO caching class"""
    def __init__(self):
        """initialises fifo cache instance"""
        super().__init__()

    def put(self, key, item):
        """Assigns item value to key in cache_data dictionary"""
        if key is not None and item is not None:
            if len(self.cache_data) + 1 > BaseCaching.MAX_ITEMS:
                last = self.cache_data.popitem(True)
                print(f"DISCARD: {last}")
            self.cache_data[key] = item
            self.cache_data.move_to_end(key, last=True)

    def get(self, key):
        """Returns value in dict linked to key"""
        return self.cache_data.get(key, None)
